import React from 'react';

export default function NotificationsPanel() {
  return (
        <div className="container col-sm-10 text-bg-secondary p-5 rounded m-0" id="notifications">
            <h2 className="pb-2">Notifications</h2>
            <div id="notifications-list">
            <div class="alert alert-light alert-dismissible fade show" role="alert">
                        <strong>Sabrina</strong> added a recipe: <strong>Sourdough Bread </strong> 
                        30 min ago
                        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                     </div>
            </div>
        </div>
  );
}