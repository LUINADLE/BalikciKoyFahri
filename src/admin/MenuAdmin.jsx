// src/admin/MenuAdmin.jsx — QR menüsü editörü (tam genişlik bölüm).
// Kategori/ürün ekle-çıkar, fiyat ve "Tükendi" durumu. Veriler menuStore (localStorage).
import React from 'react';
import {
  getDraft, isDraftDirty, publishDraft, discardDraft,
  createCategory, updateCategory, deleteCategory,
  createItem, updateItem, deleteItem, toggleAvailable, reorderItems, reorderCategories,
} from './menuStore.js';
import AdminHeader from './AdminHeader.jsx';
import SlidePanel from './SlidePanel.jsx';

const EMPTY_ITEM = { tr_name: '', en_name: '', tr_desc: '', en_desc: '', price: '', available: true };

// Müşteri sayfasının tam adresi (QR için).
function qrUrl() {
  try { return window.location.origin + '/qr-menu'; } catch { return '/qr-menu'; }
}

function MenuAdmin(shell) {
  // Editör TASLAK menü üzerinde çalışır; "Kaydet" ile yayına geçer (müşteri sayfası yayını görür).
  const [menu, setMenu] = React.useState(() => getDraft());
  const [dirty, setDirty] = React.useState(() => isDraftDirty());
  // Ürün ekle/düzenle paneli: { catId, item|null }
  const [editing, setEditing] = React.useState(null);

  // Toast yığını
  const [toasts, setToasts] = React.useState([]);
  const pushToast = React.useCallback((msg) => {
    const key = Date.now() + '-' + Math.random().toString(36).slice(2, 6);
    setToasts(t => [...t, { key, msg }]);
    setTimeout(() => setToasts(t => t.filter(x => x.key !== key)), 2600);
  }, []);
  const dismissToast = (key) => setToasts(t => t.filter(x => x.key !== key));

  const refresh = React.useCallback(() => { setMenu(getDraft()); setDirty(isDraftDirty()); }, []);

  const save = () => { publishDraft(); setDirty(false); pushToast('Değişiklikler kaydedildi · müşteri menüsü güncellendi'); };
  const discard = () => {
    if (!window.confirm('Kaydedilmemiş tüm değişiklikler geri alınsın mı?')) return;
    discardDraft(); refresh(); pushToast('Değişiklikler geri alındı');
  };

  const addCategory = () => { createCategory({ name: { tr: 'Yeni Kategori', en: 'New Category' } }); refresh(); pushToast('Kategori eklendi'); };
  const removeCategory = (cat) => {
    if (window.confirm(`"${cat.name.tr || 'Kategori'}" ve içindeki tüm ürünler silinsin mi?`)) {
      deleteCategory(cat.id); refresh(); pushToast(`"${cat.name.tr || 'Kategori'}" kategorisi silindi`);
    }
  };

  const removeItem = (item) => {
    if (window.confirm(`"${item.name.tr || 'Ürün'}" silinsin mi?`)) { deleteItem(item.id); refresh(); pushToast(`"${item.name.tr || 'Ürün'}" silindi`); }
  };
  const onToggle = (item) => { toggleAvailable(item.id); refresh(); pushToast(item.available ? 'Ürün "Tükendi" olarak işaretlendi' : 'Ürün yeniden "Mevcut"'); };

  // İmleç hedef satırın dikey ortasının altındaysa "arkasına", üstündeyse "önüne".
  const dropAfter = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    return e.clientY > r.top + r.height / 2;
  };
  // ids dizisinde target'ı bul; after ise sonrasına ekle. (drag zaten filtrelenmiş olmalı.)
  const insertId = (ids, targetId, dragId, after) => {
    let at = ids.indexOf(targetId);
    if (after) at += 1;
    ids.splice(at, 0, dragId);
    return ids;
  };

  // Sürükle-bırak durumu: { id, catId } sürüklenen ürün; dragOver = { id, after } hedef satır.
  const [drag, setDrag] = React.useState(null);
  const [dragOver, setDragOver] = React.useState(null);

  const onDragStart = (e, item) => {
    setDrag({ id: item.id, catId: item.catId });
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', item.id); } catch { /* yok say */ }
  };
  const onDragOverItem = (e, item) => {
    if (!drag || drag.catId !== item.catId || drag.id === item.id) return; // yalnız aynı kategori
    e.preventDefault();
    e.stopPropagation(); // kategori drop hedefine sıçramasın
    e.dataTransfer.dropEffect = 'move';
    const after = dropAfter(e);
    if (!dragOver || dragOver.id !== item.id || dragOver.after !== after) setDragOver({ id: item.id, after });
  };
  const onDropItem = (e, cat, target) => {
    e.preventDefault();
    e.stopPropagation();
    if (!drag || drag.catId !== cat.id || drag.id === target.id) { setDrag(null); setDragOver(null); return; }
    const ids = insertId(cat.items.map(it => it.id).filter(id => id !== drag.id), target.id, drag.id, dropAfter(e));
    reorderItems(cat.id, ids);
    setDrag(null); setDragOver(null);
    refresh();
  };
  const onDragEnd = () => { setDrag(null); setDragOver(null); };

  // Kategori sürükle-bırak durumu (üründen bağımsız). catOver = { id, after }.
  const [catDrag, setCatDrag] = React.useState(null);
  const [catOver, setCatOver] = React.useState(null);

  const onCatDragStart = (e, cat) => {
    setCatDrag(cat.id);
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', cat.id); } catch { /* yok say */ }
  };
  const onCatDragOver = (e, cat) => {
    if (!catDrag || catDrag === cat.id) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const after = dropAfter(e);
    if (!catOver || catOver.id !== cat.id || catOver.after !== after) setCatOver({ id: cat.id, after });
  };
  const onCatDrop = (e, target) => {
    e.preventDefault();
    if (!catDrag || catDrag === target.id) { setCatDrag(null); setCatOver(null); return; }
    const ids = insertId(menu.categories.map(c => c.id).filter(id => id !== catDrag), target.id, catDrag, dropAfter(e));
    reorderCategories(ids);
    setCatDrag(null); setCatOver(null);
    refresh();
  };
  const onCatDragEnd = () => { setCatDrag(null); setCatOver(null); };

  // Sürükleme sırasında imleç viewport kenarına yaklaşınca sayfayı otomatik kaydır.
  // (Native HTML5 DnD bunu kendiliğinden yapmaz.) Hem ürün hem kategori için geçerli.
  const dragging = !!drag || !!catDrag;
  React.useEffect(() => {
    if (!dragging) return;
    const EDGE = 90, MAX = 18;
    let y = null;
    let raf = 0;
    const onOver = (e) => { y = e.clientY; };
    window.addEventListener('dragover', onOver);
    const tick = () => {
      if (y != null) {
        const h = window.innerHeight;
        if (y < EDGE) window.scrollBy(0, -Math.ceil(((EDGE - y) / EDGE) * MAX));
        else if (y > h - EDGE) window.scrollBy(0, Math.ceil(((y - (h - EDGE)) / EDGE) * MAX));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('dragover', onOver); cancelAnimationFrame(raf); };
  }, [dragging]);

  // Sol çubukta kategori adına tıklayınca sağdaki bloğa kaydır.
  const scrollToCat = (id) => {
    document.getElementById('qadm-cat-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openNew = (catId) => setEditing({ catId, item: null });
  const openEdit = (catId, item) => setEditing({ catId, item });
  const closePanel = () => setEditing(null);
  const onSaved = (edited) => { refresh(); closePanel(); pushToast(edited ? 'Ürün güncellendi' : 'Ürün eklendi'); };

  return (
    <div style={{ minHeight: '100vh' }}>
      <AdminHeader {...shell}>
        {dirty && (
          <>
            <button onClick={save} className="adm-action primary">Değişiklikleri Kaydet</button>
            <button onClick={discard} className="adm-action">Geri Al</button>
          </>
        )}
        <a href={qrUrl()} target="_blank" rel="noreferrer" className="adm-action" style={{ textDecoration: 'none' }}>
          Müşteri Sayfası ↗
        </a>
        <button onClick={addCategory} className="adm-action">+ Kategori</button>
      </AdminHeader>

      <div style={{ padding: '1.5rem clamp(1rem, 4vw, 2.5rem) 4rem', maxWidth: 1100, margin: '0 auto' }}>
        {/* QR bağlantısı bilgi kutusu */}
        <div className="qadm-url">
          <div>
            <div style={{ fontSize: '.58rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bronze)', fontWeight: 600, marginBottom: '.35rem' }}>QR Menü Adresi</div>
            <code style={{ fontSize: '.85rem', color: 'var(--adm-text)' }}>{qrUrl()}</code>
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--adm-dim)' }}>
            Bu adresi QR koda dönüştürüp masalara koyabilirsiniz.
          </div>
        </div>

        {menu.categories.length === 0 && (
          <div className="adm-list-empty">Henüz kategori yok. “+ Kategori” ile başlayın.</div>
        )}

        {menu.categories.length > 0 && (
        <div className="qadm-layout">
          {/* Sol: kategori çubuğu — sürükle-bırak ile sırala, tıkla ile kaydır */}
          <aside className="qadm-side">
            <div className="qadm-side-head">Kategoriler</div>
            <div className="qadm-side-hint">Sürükleyerek sırala</div>
            {menu.categories.map(cat => (
              <div
                key={cat.id}
                className={`qadm-side-item${catDrag === cat.id ? ' dragging' : ''}${catOver?.id === cat.id ? (catOver.after ? ' drag-over-bottom' : ' drag-over-top') : ''}`}
                draggable
                onDragStart={(e) => onCatDragStart(e, cat)}
                onDragOver={(e) => onCatDragOver(e, cat)}
                onDrop={(e) => onCatDrop(e, cat)}
                onDragEnd={onCatDragEnd}
                onClick={() => scrollToCat(cat.id)}
                title="Sürükle: sırala · Tıkla: bölüme git"
              >
                <span className="qadm-grip" aria-hidden="true">⠿</span>
                <span className="qadm-side-name">{cat.name.tr || 'Adsız'}</span>
              </div>
            ))}
          </aside>

          {/* Sağ: kategori blokları (editör) */}
          <div className="qadm-main">
        {menu.categories.map(cat => (
          <section key={cat.id} id={`qadm-cat-${cat.id}`} className="qadm-cat">
            <div className="qadm-cat-head">
              <div className="qadm-cat-titles">
                <input
                  className="qadm-cat-input"
                  defaultValue={cat.name.tr}
                  placeholder="Kategori (TR)"
                  onBlur={(e) => { if (e.target.value !== cat.name.tr) { updateCategory(cat.id, { name: { ...cat.name, tr: e.target.value.trim() } }); refresh(); } }}
                />
                <input
                  className="qadm-cat-input qadm-cat-input-en"
                  defaultValue={cat.name.en}
                  placeholder="Category (EN)"
                  onBlur={(e) => { if (e.target.value !== cat.name.en) { updateCategory(cat.id, { name: { ...cat.name, en: e.target.value.trim() } }); refresh(); } }}
                />
              </div>
              <div style={{ display: 'flex', gap: '.5rem', flexShrink: 0 }}>
                <button onClick={() => openNew(cat.id)} className="adm-today-btn">+ Ürün</button>
                <button onClick={() => removeCategory(cat)} className="qadm-del" title="Kategoriyi sil" aria-label="Kategoriyi sil">Sil</button>
              </div>
            </div>

            {cat.items.length === 0 && (
              <div style={{ padding: '1.25rem 0', color: 'var(--adm-dim)', fontSize: '.8rem', fontStyle: 'italic' }}>Bu kategoride ürün yok.</div>
            )}

            {cat.items.map((item) => (
              <div
                key={item.id}
                className={`qadm-item${item.available ? '' : ' qadm-out'}${drag?.id === item.id ? ' dragging' : ''}${dragOver?.id === item.id ? (dragOver.after ? ' drag-over-bottom' : ' drag-over-top') : ''}`}
                onDragOver={(e) => onDragOverItem(e, item)}
                onDrop={(e) => onDropItem(e, cat, item)}
              >
                <div
                  className="qadm-grip"
                  draggable
                  onDragStart={(e) => onDragStart(e, item)}
                  onDragEnd={onDragEnd}
                  title="Sürükleyerek sırala"
                >⠿</div>
                <div className="qadm-item-main">
                  <div className="qadm-item-name">
                    {item.name.tr || '—'}
                    {!item.available && <span className="qadm-badge">Tükendi</span>}
                  </div>
                  {item.desc.tr && <div className="qadm-item-desc">{item.desc.tr}</div>}
                  <div className="qadm-item-en">{item.name.en}{item.desc.en ? ` — ${item.desc.en}` : ''}</div>
                </div>
                <div className="qadm-item-price">{item.price || '—'}</div>
                <div className="qadm-item-actions">
                  <label className="adm-check" title="Mevcut / Tükendi">
                    <input type="checkbox" checked={item.available} onChange={() => onToggle(item)} />
                    Mevcut
                  </label>
                  <button onClick={() => openEdit(cat.id, item)} className="adm-today-btn">Düzenle</button>
                  <button onClick={() => removeItem(item)} className="qadm-del" aria-label="Ürünü sil">Sil</button>
                </div>
              </div>
            ))}
          </section>
        ))}
          </div>
        </div>
        )}
      </div>

      <ItemPanel editing={editing} onClose={closePanel} onSaved={onSaved} />

      {/* Aksiyon toast'ları (sol-alt) */}
      {toasts.length > 0 && (
        <div className="adm-toasts">
          {toasts.map(t => (
            <div key={t.key} className="adm-toast" role="status">
              <div className="adm-toast-body"><div className="adm-toast-name">{t.msg}</div></div>
              <button className="adm-toast-x" onClick={() => dismissToast(t.key)} aria-label="Kapat">×</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Ürün ekleme/düzenleme paneli (sağdan kayar).
function ItemPanel({ editing, onClose, onSaved }) {
  const open = !!editing;
  const item = editing?.item || null;
  const [form, setForm] = React.useState(EMPTY_ITEM);
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  React.useEffect(() => {
    if (!open) return;
    setForm(item ? {
      tr_name: item.name.tr, en_name: item.name.en,
      tr_desc: item.desc.tr, en_desc: item.desc.en,
      price: item.price, available: item.available,
    } : EMPTY_ITEM);
  }, [open, item]);

  const submit = (e) => {
    e.preventDefault();
    const data = {
      name: { tr: form.tr_name, en: form.en_name },
      desc: { tr: form.tr_desc, en: form.en_desc },
      price: form.price,
      available: form.available,
    };
    if (item) updateItem(item.id, data);
    else createItem(editing.catId, data);
    onSaved(!!item);
  };

  return (
    <SlidePanel open={open} onClose={onClose} subtitle={item ? 'Ürünü Düzenle' : 'Yeni Ürün'} title={item ? (item.name.tr || 'Ürün') : 'Ürün Ekle'}>
      <form onSubmit={submit} className="adm-panel-body" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1 }}>
          <div className="adm-field-row">
            <div className="adm-field">
              <label>Ürün Adı (TR) *</label>
              <input value={form.tr_name} onChange={(e) => set('tr_name', e.target.value)} placeholder="Örn. Izgara Levrek" />
            </div>
            <div className="adm-field">
              <label>Ürün Adı (EN)</label>
              <input value={form.en_name} onChange={(e) => set('en_name', e.target.value)} placeholder="e.g. Grilled Sea Bass" />
            </div>
          </div>
          <div className="adm-field-row">
            <div className="adm-field">
              <label>Açıklama (TR)</label>
              <textarea rows={2} value={form.tr_desc} onChange={(e) => set('tr_desc', e.target.value)} placeholder="Malzemeler, sunum…" />
            </div>
            <div className="adm-field">
              <label>Açıklama (EN)</label>
              <textarea rows={2} value={form.en_desc} onChange={(e) => set('en_desc', e.target.value)} placeholder="Ingredients, plating…" />
            </div>
          </div>
          <div className="adm-field-row">
            <div className="adm-field">
              <label>Fiyat</label>
              <input value={form.price} onChange={(e) => set('price', e.target.value)} placeholder="450 ₺ / Günün Fiyatı" />
            </div>
            <div className="adm-field" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <label className="adm-check" style={{ paddingBottom: '.6rem' }}>
                <input type="checkbox" checked={form.available} onChange={(e) => set('available', e.target.checked)} />
                Menüde mevcut (kapalıysa “Tükendi”)
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn bb" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
          {item ? 'Değişiklikleri Kaydet' : 'Ürünü Ekle'}
        </button>
      </form>
    </SlidePanel>
  );
}

export default MenuAdmin;
