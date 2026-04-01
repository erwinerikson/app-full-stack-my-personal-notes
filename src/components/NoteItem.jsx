import React from 'react';
import { showFormattedDate } from '../utils';
import { highlightText } from '../utils/functionSet';
import NoteActionButton from './NoteActionButton';

function NoteItem({ id, title, body, createdAt, keyword, variant, onDelete, onArchive }) {
  return (
    <div
      className="note-item"
      data-testid="note-item"
      data-note-id={ id }
    >
      <div className="note-item__content" data-testid="note-item-content">
        {/* TODO [Basic] tampilkan judul catatan menggunakan note.title */}
        {/* TODO [Advanced] sorot kata kunci pencarian dalam judul menggunakan elemen <mark>. */}
        <h3 className="note-item__title" data-testid="note-item-title">
          { highlightText(title, keyword) }
        </h3>
        {/* TODO [Basic] gunakan util showFormattedDate untuk menampilkan tanggal dibuat. */}
        <p className="note-item__date" data-testid="note-item-date">
          { showFormattedDate(createdAt) }
        </p>
        {/* TODO [Basic] tampilkan isi catatan dari note.body */}
        {/* TODO [Advanced] sorot kata kunci pencarian dalam isi menggunakan elemen <mark>. */}
        <p className="note-item__body" data-testid="note-item-body">
          { highlightText(body, keyword) }
        </p>
      </div>
      <div className="note-item__action" data-testid="note-item-action">
        {/* TODO [Skilled] pecah tombol aksi menjadi komponen terpisah bernama `NoteActionButton` dengan menerima props `variant` dan `onClick` */}
        <NoteActionButton variant='Delete' onClick={ () => onDelete(id) } className='note-item__delete-button' dataTestId='note-item-delete-button' />

        {/* TODO [Advanced] implementasikan tombol arsip untuk fitur mengarsipkan catatan */}
        <NoteActionButton variant={ variant } onClick={ () => onArchive(id) } className='note-item__archive-button' dataTestId='note-item-archive-button' />
      </div>
    </div>
  );
}

export default NoteItem;
