import React from 'react';

export function MessageDialog({message, onHide}) {
  if(message){
  return (
    <div class="alert alert-primary alert-dismissible fade show pt-3 mt-3" role="alert" id="errorDialouge">
        <strong id="errorBody">{message}</strong>
        <button type="button" class="btn-close btn-sm" onClick={onHide}></button>
    </div>
  );}
}
