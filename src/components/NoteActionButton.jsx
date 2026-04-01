import React from 'react';
 
function NoteActionButton({ variant, onClick, className, dataTestId }) {
  return <button
           className={ className }
           data-testid={ dataTestId }
           onClick={ onClick }>
           { variant }
         </button>
}
 
export default NoteActionButton;