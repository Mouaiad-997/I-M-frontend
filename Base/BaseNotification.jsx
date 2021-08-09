import React from "react";
import "../Assets/CSS/styles.css";


const baseNotification = (props) => {
    return (
      <div className="base-notification">
        <div class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{props.titleMessage}</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>{props.message} has been successsfully</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  {props.text}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default baseNotification;