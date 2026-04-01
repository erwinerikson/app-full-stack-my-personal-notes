import React from 'react';
import NoteItem from './NoteItem';
import { monthTime } from '../utils/functionSet';

function NotesList({ notes, keyword, onDelete, onArchive, dataTestId }) {
  // TODO [Basic] validasi notes agar tidak kosong.
  const hasNotes = notes.length > 0 ? true : false; // update dengan nilai yang sesuai

  const groupedNotes = notes.reduce((group, note) => {
    const createdAt = monthTime(note.createdAt);
    if (!group[createdAt]) {
      group[createdAt] = [];
    }
    group[createdAt].push(note);
    return group;
  }, {});

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={ dataTestId }>
        {/* TODO [Basic] tampilkan pesan kosong yang informatif ketika tidak ada catatan. */}
        <p
          className="notes-list__empty-message"
          data-testid={ `${ dataTestId }-empty` }
        >Tidak ada catatan</p>
      </div>
    );
  }

  return (
    <div className="notes-section--grouped" data-testid={ dataTestId }>
      {/* TODO [Basic] gunakan array.map untuk merender NoteItem untuk setiap catatan. */}
      {/* TODO [Skilled] ekstrak tombol aksi menjadi komponen reusable agar dipakai NoteItem. */}
      {/* TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">. */}
      { Object.entries(groupedNotes).map(([groupKey, items]) => (
        <section key={ groupKey } className="notes-group" data-testid={ `${ groupKey }-group` }>
          <h3>{ groupKey }</h3>
          <span data-testid={ `${ groupKey }-group-count` }>{ items.length } catatan</span>
          <div className="notes-list" data-testid={ dataTestId }>
            { items.map(item => (
              <NoteItem
                key={ item.id }
                { ...item }
                keyword={ keyword }
                variant={ item.archived == false ? 'Arsipkan' : 'Pindahkan' }
                onDelete={ onDelete }
                onArchive={ onArchive }
              />
            )) }
          </div>
        </section>
      )) }
    </div>
  );
}

export default NotesList;
