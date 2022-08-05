if (!window.appointlyConfig) {
  window.appointlyConfig = {
    apiUrl: "https://api.apntly.com/appointly",
    clientUniqueId: "ZB925UCURURVVINS99N85SQI",
    booking: {
      bookingHtml: `<html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
  <meta http-equiv='x-ua-compatible' content='ie=edge'>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue-select@3.0.0"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-select@3.0.0/dist/vue-select.css">
  <script src="https://cdn.jsdelivr.net/npm/vue-tel-input"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-tel-input/dist/vue-tel-input.css"/>
  <script src='https://cdn.jsdelivr.net/npm/v-calendar@2.3.2/lib/v-calendar.umd.min.js'></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-cool-select/dist/themes/bootstrap.css">
  <style>
    * {
      --primary: #6A42C8;
      --text-black: #353f4d;
      --text-light-black: #868383;
    }

    body {
      color: #353f4d;
    }


    .fade-in {
      background: rgba(0, 0, 0, 0.65)
    }

    .modal {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .modal-container {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      font-size: 14px;
      line-height: 1.42857143;
      -webkit-font-smoothing: antialiased;
      color: #333333;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 30px 20px 20px 20px;
      margin: auto;
      font-family: Helvetica, sans-serif;
      background: #ffffff;
      border-color: #000000;
      border-width: 1px;
      border-style: solid;
      width: min(95vw, 910px);
    }


    @media only screen and (max-width: 480px) {
      .modal-container {
        width: min(350px, 90vw);
      }
    }


    .container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
    }

    .vc-container {
      width: 100% !important;
    }

    .time-slots-container {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .cart-container {
      margin-top: 20px;
    }

    .time-slot-cart-container {
      margin-top: 4px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-height: 120px;
      overflow-x: auto;
    }

    .time-slots-container {
      max-height: 200px;
      overflow-x: auto;
    }

    .date-time-picker {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .date-time-picker {
      width: 100% !important;
      max-width: min(350px, 80vw) !important;
    }


    .side-menu {
      margin-left: 0;
    }

    .select-time-slot {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    .select-time-slot .price {
      font-weight: 900;
    }

    .time-slot.disabled, .time-slot.disabled:hover {
      background: rgba(65, 76, 137, 0.3);
      cursor: alias;
    }

    .time-slot:hover {
      background: rgba(65, 76, 137, 1);
    }

    .time-slot.selected {
      background: rgba(65, 76, 137, 1);
      /*##1fd3c0;*/
    }

    .time-slot, .time-slot font font, .time-slot-cart-item {
      color: var(--text-black);
    }

    .time-slot {
      background: #0066b2;
      position: relative;
      display: block;
      width: 80%;
      border: 2px solid transparent;
      font-size: 12px;
      font-weight: 300;
      cursor: pointer;
      padding: 7px 10px;
      border-radius: 3px;
      text-align: center;
      margin: 0;
      text-transform: none;
      margin-bottom: 6px;
    }


    .time-slot-cart-item {
      width: 80%;
      background: #0066b2;
      position: relative;
      border: 2px solid transparent;
      font-size: 12px;
      font-weight: 300;
      cursor: pointer;
      padding: 7px 10px;
      border-radius: 3px;
      margin: 0;
      text-transform: none;
      margin-bottom: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tsci-detail{
      padding-right: 10px;
    }
    .time-slot-cart-item .delete-icon {
      margin-left: auto;
    }

    .time-slot-cart-item .delete-icon img {
      height: 20px;
      opacity: 0.8;
    }

    .time-slot-cart-item .delete-icon img:hover {
      opacity: 1;
    }
    .time-slot-meta{
      color: var(--text-light-black);
      width: 100%;
      text-align: center;
      margin-bottom: 9px;
      font-size: 12.5px;
      margin-top: -2px;
    }

    legend {
      font-weight: bold;
    }


    .side-menu {
      /*margin-top: 30px;*/
      width: 100%;
    }

    @media (min-width: 768px) {
      .date-time-picker {
        max-width: 520px !important;
      }

      .time-slot {
        width: 40%;
        margin-right: 12px;
        margin-left: 12px;
      }

      .time-slots-container {
        max-height: 320px;
      }


      .book-button-container .btn-book {
        width: 75%;
      }
    }

    @media (min-width: 800px) {
      .side-menu {
        margin-left: 44px;
        width: 300px;
      }

      .side-menu {
        margin-top: 0px;
      }

      .time-slot {
        width: 100%;
      }
    }

    legend {
      font-weight: bold !important;
    }


    .btn {
      border: none;
      white-space: nowrap;
      cursor: pointer;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      color: #fff;
      line-height: initial;
      background: rgba(65, 76, 137, 1);
    }

    .btn-book {
      width: 100%;
    }

    .btn-book .price {
      float: right;
      font-weight: 900;
    }

    .btn-book-margin {
      margin-top: 40px;
    }

    .btn-book-questions {
      width: 150px;
      float: right;
      background-color: var(--primary);
      color: white;
    }

    .btn-book-customer-details-questions {
      width: 150px;
      float: right;
      background-color: var(--primary);
      color: white;
    }

    .custom-questions-button-container {
      margin-top: 40px;
    }

    .customer-details-questions-button-container {
      margin-top: 40px;
    }

    .deposit-payment-button-container {
      margin-top: 40px;
    }

    .btn-back-button {
      color: #8b95a5;
      letter-spacing: 1px;
      border-radius: 2px;
      background-color: #fff;
      border-color: #ebebeb;
    }

    .btn-book-questions[disabled] {
      background: rgba(65, 76, 137, 0.3);
      cursor: alias;
    }

    .btn-book-customer-details-questions[disabled] {
      background: rgba(65, 76, 137, 0.3);
      cursor: alias;
    }

    .book-button-container .btn-book[disabled] {
      background: rgba(65, 76, 137, 0.3);
      cursor: alias;
    }


    .close-icon {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      font: inherit;
      margin: 0;
      overflow: visible;
      text-transform: none;
      font-family: inherit;
      float: right;
      font-size: 15px;
      font-weight: bold;
      line-height: 1;
      text-shadow: 0 1px 0 #ffffff;
      opacity: 0.9;
      color: #cccccc;
      padding: 0;
      cursor: pointer;
      background: transparent;
      border: 0;
      appearance: none;
      margin-right: -5px;
      margin-top: -20px;
    }

    .close-icon:hover {
      color: #0b0d0f;
      cursor: pointer;
    }

    .question-text {
      font-size: 16px;
      margin-bottom: 8px;
      display: block;
      margin-top: 20px;
      overflow-wrap: break-word;
    }

    .answer-text {
      width: calc(100% - 24px);
      border-color: #ebebeb;
      border-width: 1px;
      border-radius: 2px;
      padding: 5px 12px;
      font-size: 14px;
      outline: 0;
      border-style: solid;
    }

    .vue-tel-input.answer-text {
      padding: 1px 1px;
      width: 100%;
    }

    .answer-text:focus {
      border-color: #80bdff;
      outline: 0;
    }

    .apntly-branding-powered-by {
      font-size: 18px;
      margin-bottom: -10px;
      float: right;
      display: flex;
      align-items: center;
      margin-top: 30px;
      justify-content: center;
      margin-right: -10px;
    }

    .apntly-branding-powered-by span a {
      margin-left: 6px;
      width: 100px;
      text-decoration: none;
    }

    .free-booking-success-message-container {
      color: #4F8A10;
      background-color: #DFF2BF;
      margin: 10px 0;
      padding: 6px 12px;
    }

    .free-booking-success-message-container .success-message-text {
      margin: 0;
      font-size: 20px;
    }

    hr {
      border-color: rgba(77, 82, 89, 0.07);;
    }

    .custom-questions-container {
      padding-right: 20px;
    }

    .custom-questions-screen-container {
      position: relative;
    }

    .deposit-payment-screen-container {
      margin-top: 36px;
    }

    @media (min-width: 800px) {
      .custom-questions-container {
        /*max-height: 70vh;*/
        /*overflow-y: auto;*/
      }

    }
    .custom-question-selection {
      /*position: absolute;*/
      /*width: calc(100% - 24px);*/
    }

    .custom-question-cart-item-heading {
      margin-top: 20px;
      font-size: 16px;
      font-weight: bold;
    }

    .vc-highlight {
      background-color: #3182ce !important;
    }

    .question-text a {
      font-size: inherit;
      color: inherit;
      font-style: italic;
    }

    .deposit-payment-option {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      overflow-wrap: break-word;
    }

    .deposit-payment-option .radio-input {
      margin-right: 15px;
    }

    .deposit-payment-option .payment-option-text {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 17px;
      display: block;
      overflow-wrap: break-word;
    }

    .subscription-message {
      font-weight: 600;
    }

    .w-100 {
      width: 100%;
    }


    .mobile-calendar-selector {
      margin-top: 10px;
      margin-bottom: 24px;
    }


    /*@media screen and (max-width: 480px) {*/
    .sm-block {
      display: block;
    }

    .sm-hide {
      display: none;
    }

    /*}*/

    @media screen and (min-width: 768px) {
      .md-block {
        display: block;
      }

      .md-hide {
        display: none;
      }
    }

    @media screen and (min-width: 800px) {

      .lg-hide {
        display: none;
      }

      .lg-block {
        display: block;
      }
    }

    .date-time-picker {
      align-self: flex-start;
    }

    .timezone-container {
      margin-bottom: 20px;
    }

    .book-button-container {
      display: flex;
      justify-content: center;
    }

    .loader {
      border: 4px solid #f3f3f3;
      border-top: 4px solid;
      border-top-color: var(--primary);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: spin 1.5s linear infinite;
      /*justify-self: center;*/
      margin: auto;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .btn-book {
      background-color: var(--primary);
    }

    .time-slot {
      background: transparent;
      border: 1.9px solid #cbd5e0 !important;
      color: var(--text-black);
    }

    .time-slot.selected, .time-slot:hover {
      background-color: var(--primary);
      color: white;
    }

    .time-slot-cart-item {
      background-color: var(--primary);
      color: white;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }
    .apntly-modal-container::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      opacity: 1;
    }

    .vs__dropdown-option--highlight {
      background-color: var(--primary) !important;
    }

    .vc-highlight, .vc-day-content:hover {
      background-color: var(--primary) !important;
      color: white;
    }
    .vs__dropdown-option{
      white-space: normal;
    }


  </style>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  font-family: 'Montserrat', sans-serif;
}
.time-slot{
  font-weight: 400;
}

    
    
  </style>
</head>
<body class="fade-in pop-up-container apntly-modal-container">

<div class="modal" id='app'>
  <div class="modal-container" :key="renderKey">
    <button type="button" class="close-icon action-close"
            data-dismiss="modal"
            @click="closeModal">X
    </button>

    <div class="admin-booking-options" style="border: 2px solid #cbd5e0;padding: 12px;margin-top: 10px"
         v-if="isAdmin()">
      <h3>Admin Booking Options</h3>

      <div style="display: flex">
        <input type="checkbox" style="margin-right: 8px" @input="adminSlotChanged()" v-model="showAllSlots"/>
        <legend>Override Availability <span>(Ignore Availability time, and show every slots as available)</span>
        </legend>
      </div>

      <div style="display: flex">
        <input type="checkbox" style="margin-right: 8px" @input="adminSlotChanged()" v-model="ignoreBookedSlots"/>
        <legend>Ignore Bookings / Calendar Events <span>(Show Booked Slots as available)</span>
        </legend>
      </div>
      <div style="display: flex" v-if="serviceMergeTeamMemberEnabled()">
        <input type="checkbox" style="margin-right: 8px" @input="adminSlotChanged()" v-model="adminMergeTeamMember"/>
        <legend>Merge team Members slots? <span>(Show slots of all team members)</span>
        </legend>
      </div>

      <div style="display: flex" v-if="isRescheduleEvent()">
        <input type="checkbox" style="margin-right: 8px" v-model="sendEmail"/>
        <legend>Send Email
        </legend>
      </div>
    </div>


    <h3 v-if="screen===1" class="main-heading">
      {{ selectDateText }}
    </h3>
    <h3 v-if="screen===2" class="main-heading">
      {{ customQuestionsHeadingText }}
    </h3>
    <h3 v-if="screen===3" class="main-heading">
      {{ freeBookingScreenContactDetailsHeadingText }}
    </h3>
    <h3 v-if="screen===5" class="main-heading">
      {{ depositPaymentScreenHeadingText }}
    </h3>

    <h3 v-if="isSubscriptionAppointment()" class="subscription-message">
      {{ subscriptionAppointmentMessage }}
    </h3>

    <template v-if="screen===1">
      <div class="container">
        <div class="mobile-calendar-selector sm-block lg-hide w-100" v-if="true">
          <div :key="variantKey">
            <div id="variant-container" v-if="showVariantContainer">
              <label style="font-weight: 600">{{ selectVariantText }}</label>
              <v-select
                @input="onSelectionChange()"
                class="variant-selection"
                :options="variants" label="text" :reduce="item => item.value"
                v-model="selectedVariant"
                style="margin-top: 5px;
                 margin-bottom: 20px"></v-select>
            </div>
          </div>
          <div id="team-member-container" v-if="showTeamMemberContainer">

            <label style="font-weight: 600">{{ selectTeamMemberText }}</label>
            <v-select
              @input="onSelectionChange()"
              :key="employeeKey"
              :options="variantEmployees" label="text" :reduce="item => item.value"
              v-model="selectedEmployee"
              style="margin-top: 5px"></v-select>

          </div>
        </div>
        <div class="date-time-picker">
          <div class="date-picker">
            <v-date-picker :min-date='new Date()'
                           v-if="setCalenderEvent()"
                           :max-date="maxDate"
                           :key="calendarKey"
                           ref="datep"
                           :disabled-dates="disabledDates"
                           @input="onSelectionChange()"
                           v-model='selectedDate'/>
          </div>

          <div style="margin-top: 20px" class="timezone-container">
            <div style="font-size: 12px;display: flex;align-items: center;">
              <svg

                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-americas"
                height="12px" style="margin-right: 4px;height: 12.5px;"
                class="svg-inline--fa fa-globe-americas fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512">
                <path fill="currentColor"
                      d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path>
              </svg>
              Timezone: {{ getBrowserTimezone() }}
            </div>

          </div>
          <div :class="{'desktop-calendar-selector':true,' sm-hide lg-block ':true }">
            <div>
              <div :key="variantKey">
                <div id="variant-container" v-if="showVariantContainer">
                  <label style="font-weight: 600">{{ selectVariantText }}</label>
                  <v-select
                    @input="onSelectionChange()"
                    class="variant-selection"
                    :options="variants" label="text" :reduce="item => item.value"
                    v-model="selectedVariant"
                    style="margin-top: 5px;
                 margin-bottom: 20px"></v-select>
                </div>
              </div>
              <div id="team-member-container" v-if="showTeamMemberContainer">

                <label style="font-weight: 600">{{ selectTeamMemberText }}</label>
                <v-select
                  @input="onSelectionChange()"
                  :key="employeeKey"
                  :options="variantEmployees" label="text" :reduce="item => item.value"
                  v-model="selectedEmployee"
                  style="margin-top: 5px"></v-select>

              </div>
            </div>

            <div :class="{'btn-book-margin':true ,'sm-hide lg-block':true}"></div>

            <div class="book-button-container" :key="bookNowButtonKey">

              <button class="btn btn-book"
                      :disabled="bookNowDisabled"
                      @click="onBookNowClicked()">{{ bookNowButtonText }}
              </button>
            </div>
          </div>
        </div>
        <div class="side-menu">
          <div class="select-time-slot" v-html="getSelectTimeSlotText()">
          </div>
          <div class="loader" v-if="isLoading"></div>
          <template v-if="timeSlots.length">
            <div class="time-slots-container" :key="timeSlotKey">
              <template v-for="timeSlot in timeSlots">
                <div :class="{'time-slot':true,'disabled':!timeSlot.available,'selected':timeSlot.selected}"
                     @click="timeSlot.available?selectTimeSlot(timeSlot):()=>{}">
                  {{ timeSlot.start + (!hideEndTime() ? " - " + timeSlot.end : '') }}
                </div>
                <template v-if="showTimeSlotMeta()">
                  <div :class="{'time-slot-meta':true,'disabled':!timeSlot.available}" v-if="timeSlot.available">
                    {{timeSlot.totalAllowedSlots-timeSlot.noOfSameTimeBooking}}/{{timeSlot.totalAllowedSlots}} slots remaining
                  </div>
                  <div  :class="{'time-slot-meta':true,'disabled':!timeSlot.available}" v-else>
                    0/{{timeSlot.totalAllowedSlots}} slots remaining
                  </div>
                </template>
              </template>
            </div>
          </template>
          <div class="cart-container" v-if="showModalCart() && cartItems.length>0">
            <label style="font-weight: 600">Cart:</label>
            <div class="time-slot-cart-container">
              <template v-for="(cartItem,cartItemIndex) in cartItems">
                <div class="time-slot-cart-item">
                  <div class="tsci-detail">
                    <div class="tsci-sv-detail">
                      {{ selectVariantText }}: {{ cartItem.timeSlot.serviceVariant.title }}
                    </div>
                    <div class="tsci-tm-detail">
                      {{ selectTeamMemberText }}: {{ cartItem.timeSlot.employee.name }}
                    </div>
                    {{ dateText }}: {{ getDateFromTimestampStartBrowserFormatted(cartItem.timeSlot.bookingTimestamp) }}
                    {{timeText}}: {{ cartItem.timeSlot.start + (!hideEndTime() ? " - " + cartItem.timeSlot.end : '') }}
                  </div>
                  <span class="delete-icon" @click="removeCartItem(cartItemIndex)"><img
                    src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png"/></span>
                </div>
              </template>
            </div>
          </div>

          <!---if modal cart is to be shown always show -->
          <!--          <div :class="{'btn-book-margin':true }" v-if="useMobileTopCalendarSelectorLayout()"></div>-->
          <div :class="{'btn-book-margin sm-block lg-hide':true }"></div>

          <div class="sm-block lg-hide">
            <div class="book-button-container" :key="bookNowButtonKey">
              <button class="btn btn-book"
                      :disabled="bookNowDisabled"
                      @click="onBookNowClicked()">{{ bookNowButtonText }}
              </button>
            </div>
          </div>
          <p v-if="!this.getSelectedSlot()" class="time-slot-not-selected-text">{{ timeSlotNotSelectedText }}</p>

        </div>
      </div>
    </template>
    <template v-if="screen===2">
      <div class="custom-questions-screen-container">
        <div class="custom-questions-container">
          <template v-for="cartItem in cartItems">

            <template v-for="question in cartItem.timeSlot.serviceVariant.questions"
                      v-if="cartItem.timeSlot.serviceVariant.questions && cartItem.timeSlot.serviceVariant.questions.length>0">
              <div class="custom-question-cart-item-heading" v-if="cartItems.length>1 ">
                {{ getBookingHeadingText() }}: {{ cartItem.timeSlot.serviceVariant.title }}
                Date: {{ getDateFromTimestampStartBrowserFormatted(cartItem.timeSlot.bookingTimestamp) }}
                Time: {{ cartItem.timeSlot.start + (!hideEndTime() ? " - " + cartItem.timeSlot.end : '') }}
              </div>
              <div class="question-text">
                <div v-html="getQuestionHtml(question.question)">
                </div>
              </div>
              <textarea v-if="question.type===1" class="answer-text" id="" rows="5"
                        @keyup="calculateCustomQuestionsButtonDisabled()"
                        v-model="question.answer"
              ></textarea>

              <template v-if="question.type===3">
                <div class="custom-question-selection-container">

                  <v-select
                    @input="calculateCustomQuestionsButtonDisabled()"
                    class="custom-question-selection"
                    :options="question.options.map(x=>{
                return {
                  text:x.text,
                  value:x.text
                }
              })" label="text" :reduce="item => item.value"
                    v-model="question.answer"
                    style="margin-top: 5px;
          margin-bottom: 20px"></v-select>
                </div>
              </template>
              <hr v-if="cartItems.length>1"/>
            </template>
          </template>
        </div>
        <div class="custom-questions-button-container">
          <button class="btn btn-back-button" @click="setScreen(1)">
            {{ goBackButtonText }}
          </button>
          <button class="btn btn-book-questions"
                  :disabled="customQuestionsButtonDisabled"
                  @click="customQuestionsButtonClicked()">
            {{ bookNowButtonText }}
          </button>
        </div>
      </div>

    </template>
    <template v-if="screen===3">
      <div>
        <p class="question-text">{{ freeBookingScreenFullNameText }}</p>
        <input class="answer-text"
               v-model="customerDetailQuestions.name"
        />

        <p class="question-text">{{ freeBookingScreenEmailText }}</p>
        <input class="answer-text"
               v-model="customerDetailQuestions.email"
        />
        <template v-if="isPhoneFieldEnabledInFreeBooking()">
          <p class="question-text">{{ freeBookingScreenPhoneNumberText }}</p>
          <vue-tel-input v-model="customerDetailQuestions.phoneNo"
                         :default-country="getDefaultCountry()"
                         class="answer-text"
                         @open="onDropdownOpen(true)"
                         v-on:country-changed="countryChanged"
                         @close="onDropdownOpen(false)">
            <template v-slot:arrow-icon>
              <span v-if="phoneNumberDropDown">▲</span>
              <span v-else>▼</span>
            </template>
          </vue-tel-input>
        </template>

        <div class="customer-details-questions-button-container">
          <button class="btn btn-back-button" @click="setScreen(questions.length>0?2:1)">
            {{ goBackButtonText }}
          </button>
          <button class="btn btn-book-customer-details-questions"
                  :disabled="customerDetailQuestionsButtonDisabled()"
                  @click="customerDetailsQuestionsButtonClicked()">
            {{ bookNowButtonText }}
          </button>
        </div>
      </div>

    </template>
    <template v-if="screen===4">
      <div class="free-booking-success-message-container">
        <p class="success-message-text">{{ freeBookingScreenConfirmationMessageText }}</p>
      </div>

    </template>
    <template v-if="screen===5">
      <div class="deposit-payment-screen-container">
        <template v-for="(option,paymentOptIdx) in getDepositPaymentOptions()">
          <div class="deposit-payment-option">
            <input type="radio" class="radio-input" :checked="selectedDepositPaymentOption===paymentOptIdx"
                   @click="selectedDepositPaymentOption=paymentOptIdx"/>
            <p class="payment-option-text">{{ option.text }}</p>
          </div>
        </template>
        <div class="deposit-payment-button-container">
          <button class="btn btn-back-button" @click="setScreen(1)">
            {{ goBackButtonText }}
          </button>
          <button class="btn btn-book-questions"
                  :disabled="depositPaymentButtonDisabled()"
                  @click="depositPaymentButtonClicked()">
            {{ bookNowButtonText }}
          </button>
        </div>
      </div>
    </template>
    <p class="apntly-branding-powered-by" v-if="brandingEnabled">Powered By <span>
      <a href="#" width="50px" @click.prevent="openAppPage">Appointly</a></span></p>
  </div>
</div>


<script id="vue-script">
  Vue.component('v-select', VueSelect.VueSelect);
  // Vue.component('v-cool-select', VueSelect.VueSelect)
  //  Vue.component('v-cool-select',vueCoolSelect.CoolSelect)
  window.apntlyBookingModal = new Vue({
    el: '#app',
    data: {
      screen: 1,
      selectDateText: "Select Date",
      selectTimeSlotText: "Select preferred time slot",
      timeSlotPriceText: "{{{timeSlotPriceText}}}",
      selectVariantText: "Service",
      selectTeamMemberText: "Team Member",
      dateText: "Date",
      timeText: "Time",
      timeSlotNotSelectedText: "Please select a time slot",
      bookNowButtonText: "Book Now",
      customQuestionsHeadingText: "Please answer few questions",
      goBackButtonText: "Back",
      freeBookingScreenContactDetailsHeadingText: "Please enter your Contact Details",
      depositPaymentScreenHeadingText: "Payment Options (Pay Deposit amount now, and remaining after the appointment): ",
      freeBookingScreenFullNameText: "Full Name",
      freeBookingScreenEmailText: "Email",
      freeBookingScreenPhoneNumberText: "Contact No.",
      freeBookingScreenConfirmationMessageText: "Your Booking is Confirmed. We have sent you confirmation email with appointment details.",
      showVariantPrice: '{{{showVariantPrice}}}',
      renderKey: 1,
      calendarKey: "ck",
      employeeKey: "ek",
      variantKey: "vk",
      timeSlotKey: "tsl",
      bookNowButtonKey: "bookbk",
      iFrameId: "{{{iFrameId}}}",
      str: "2,",
      selectedDate: new Date(),
      maxDate: null,
      disabledDates: [],
      availableDates: [],
      variants: [{text: "1/1", value: "1"}, {text: "2/2", value: "2"}],
      selectedVariant: null,
      // simple example of items
      variantEmployees: [],
      selectedEmployee: null,
      // there will be a selected item
      selected: 'Item 1',
      timeSlots: [],
      cartItems: [],
      questions: [],
      customerDetailQuestions: {
        name: '',
        email: '',
        phoneNo: '',
        phoneNumberCountryDetails: {},
      },
      isCountryCodeValid: false,
      phoneNumberDropDown: false,
      customQuestionsButtonDisabled: true,
      showVariantContainer: true,
      showTeamMemberContainer: true,
      showAllSlots: false,
      ignoreBookedSlots: false,
      adminMergeTeamMember:true,
      sendEmail: true,
      brandingEnabled: false,
      selectedDepositPaymentOption: -1,
      subscriptionAppointmentMessage: '',
      bookNowDisabled: true,
      isLoading:false,
    },
    methods: {
      selectTimeSlot: function (timeSlot) {
        console.log(timeSlot)
        if (!this.showModalCart()) {
          this.timeSlots.map(x => x.selected = false)
          timeSlot.selected = true;
          let slots = this.timeSlots;
          this.timeSlots = []
          this.timeSlots = slots;
          this.cartItems = [];
          this.cartItems.push({
            timeSlot: timeSlot
          });
          window.parent.appointlyClient.isBookNowButtonDisabled();
        }
        if (this.showModalCart()) {
          // timeSlot.selected = true;
          this.cartItems.push({
            timeSlot: timeSlot
          })
          let slots = this.timeSlots;
          this.timeSlots = []
          this.timeSlots = slots;
          window.parent.appointlyClient.isBookNowButtonDisabled();
          this.onSelectionChange()
        }
      },
      removeCartItem: function (cartItemIndex) {
        this.cartItems.splice(cartItemIndex, 1)
        if (this.cartItems.length === 0) {
          window.parent.appointlyClient.isBookNowButtonDisabled()
        }
        this.onSelectionChange()
      },
      onSelectionChange: function () {
        parent.window.appointlyClient.onSelectionChange()
      },
      adminSlotChanged: function () {
        parent.window.appointlyClient.adminSlotChanged()
      },

      onBookNowClicked: function () {
        parent.window.appointlyClient.onBookNowClicked()
      },

      customQuestionsButtonClicked: function () {
        // parent.window.console.log("customQuestionsButtonClicked")
        parent.window.appointlyClient.customQuestionsButtonClicked()
      },
      customerDetailsQuestionsButtonClicked: function () {
        parent.window.appointlyClient.customerDetailsQuestionsButtonClicked()
      },
      depositPaymentButtonClicked: function () {
        parent.window.appointlyClient.depositPaymentButtonClicked()
      },
      closeModal: function () {
        parent.window.appointlyClient.closeBookModal()
      },

      getBrowserTimezone() {
        window["datep"] = this.$refs["datep"]
        this.setCalenderEvent();
        return parent.window.appointlyClient.getBrowserTimezone()
      },
      setCalenderEvent() {
        try {
          if(!this.$refs["datep"] || !this.$refs["datep"].$refs || !this.$refs["datep"].$refs.calendar){
            return true;
          }
          if(!document.querySelector(".vc-arrow.is-left").getAttribute("isEventSet")){
            document.querySelector(".vc-arrow.is-left").addEventListener('click', () => {
              //if user is switching month dont switch to first available date
              window.parent.appointlyClient.setIsFirstTimeDateSelected(true);
              window.parent.appointlyClient.onSelectionChange()
            });
            document.querySelector(".vc-arrow.is-left").setAttribute('isEventSet',true)
          }
          if(!document.querySelector(".vc-arrow.is-right").getAttribute("isEventSet")){
            document.querySelector(".vc-arrow.is-right").addEventListener('click', () => {
              window.parent.appointlyClient.setIsFirstTimeDateSelected(true);
              window.parent.appointlyClient.onSelectionChange()
            });
            document.querySelector(".vc-arrow.is-right").setAttribute('isEventSet',true)
          }
        }catch (e){
          console.log("Cant Attach Calender events",e)
        }
        return true
      },
      getSelectedSlot() {
        return parent.window.appointlyClient && parent.window.appointlyClient.getSelectedSlot();
      },
      calculateCustomQuestionsButtonDisabled() {
        let allCartQuestions = window.parent.appointlyClient.getCartItemQuestions();
        if (allCartQuestions.some(x => !x.answer)) {
          this.customQuestionsButtonDisabled = true;
          return;
        }
        this.customQuestionsButtonDisabled = false;
      },
      customerDetailQuestionsButtonDisabled() {
        //true means disabled
        if (!this.customerDetailQuestions.name) {
          return true
        }
        if (!this.customerDetailQuestions.email || !window.parent.appointlyClient
          .checkIfEmailValid(this.customerDetailQuestions.email)) {
          return true
        }
        if (this.isPhoneFieldEnabledInFreeBooking()) {
          if (!this.customerDetailQuestions.phoneNo || !window.parent.appointlyClient
            .checkIfPhoneNumberValid(this.customerDetailQuestions.phoneNo)) {
            return true
          }
          let countryCode = this.customerDetailQuestions.phoneNumberCountryDetails.dialCode
          if (!countryCode) {
            this.isCountryCodeValid = false
            return true
          }
        }
        return false
      },
      depositPaymentButtonDisabled: function () {
        return this.selectedDepositPaymentOption === -1
      },
      setScreen(no) {
        this.screen = no
      },
      isPhoneFieldEnabledInFreeBooking() {
        return window.parent.appointlyClient.isPhoneFieldEnabledInFreeBooking()
      },
      hideEndTime() {
        return window.parent.appointlyClient.hideEndTime()
      },
      showModalCart() {
        return window.parent.appointlyClient && window.parent.appointlyClient.showModalCart()
      },
      showTimeSlotMeta() {
        return window.parent.appointlyClient && window.parent.appointlyClient.showTimeSlotMeta()
      },
      getDateFromTimestampStartBrowserFormatted(timestamp) {
        return window.parent.appointlyClient.getDateFromTimestampStartBrowserFormatted(timestamp)
      },
      getBookingHeadingText() {
        return window.parent.appointlyClient.getBookingHeadingText();
      },
      getDefaultCountry() {
        return window.parent.appointlyClient.getDefaultCountry();
      },
      openAppPage() {
        window.open("https://apps.shopify.com/appointly", "_blank")
      },

      getQuestionHtml(questionText) {
        return questionText
      },

      useMobileTopCalendarSelectorLayout() {
        return window.parent.appointlyClient.useMobileTopCalendarSelectorLayout()
      },

      getCurrentVariantPrice() {
        let price = window.parent.appointlyClient.getCurrentVariantPrice();
        return price;
      },
      mergeTeamMemberSlots() {
        return window.parent.appointlyClient.mergeTeamMemberSlots();
      },
      serviceMergeTeamMemberEnabled(){
        return window.parent.appointlyClient.serviceMergeTeamMemberEnabled();
      },
      getDepositPaymentOptions() {
        return window.parent.appointlyClient.getDepositPaymentOptions();
      },
      getSelectTimeSlotText() {
        let price = this.getCurrentVariantPrice();
        price = '<span class=\"price\">' + price + '<span>';
        let text = this.selectTimeSlotText.replace('{{amount}}',
          price);
        return text;
      },
      isAdmin() {
        return window.parent.appointlyClient.isAdmin();
      },
      isRescheduleEvent() {
        return window.parent.appointlyClient.isRescheduleEvent();
      },
      isSubscriptionAppointment() {
        return window.parent.appointlyClient.isSubscriptionAppointment(this.selectedVariant);
      },
      countryChanged(country) {
        this.customerDetailQuestions.phoneNumberCountryDetails = country;
        this.isCountryCodeValid = true;
        console.log(country)
      },
      onDropdownOpen(value) {
        this.phoneNumberDropDown = value
      },
    }
  })
  parent.apntlyBookingModal = window.apntlyBookingModal
  window.addEventListener('click', function (e) {
    if (e && e.path && !e.path.some(x => x.className && x.className.includes && x.className==='modal-container')) {
      if (parent.appointlyClient.closePopUpOnOutSideClick)
      window.apntlyBookingModal.closeModal()
    }
  }, true)
</script>
</body>
</html>
`,
      popUpSelector: "apntly-booking-iframe"
    },
    customCss: `.apntly-modal {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999999999;
  overflow: hidden;
  visibility: hidden;
}

#apntly-book-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.apntly-float-button {
  border-radius: 5px 5px 0 0;
  top: 30%;
  position: fixed !important;
  right: 0;
  z-index: 1000;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  -webkit-transform: rotate(
    270deg);
  -webkit-transform-origin: 100% 100%;
  -moz-transform: rotate(270deg);
  -moz-transform-origin: 100% 100%;
  -ms-transform: rotate(270deg);
  -ms-transform-origin: 100% 100%;
  -o-transform: rotate(270deg);
  -o-transform-origin: 100% 100%;
  transform: rotate(
    270deg);
}

form #apntly-book-button ~ .shopify-payment-button {
  display:none;
}

.apntly-float-button {
  color: #ffffff;
  background-color: #cfb16d;
}


`,
    customJs: ``,
    removeFieldsOnCartPageJs: ``,
    clientTimezone: "EST",
    addToCartSelector: "",
    bookingButtonContainer: "",
    widgetSettings: {
      text: 'Schedule Your Consultation'
    },
    floatWidgetSettings: {"text":"BOOK APPOINTMENT","isEnabled":true,"textColor":"#ffffff","onClickAction":2,"backgroundColor":"#cfb16d","onClickProductId":"6889995337821"},
    bookingInfoSettings: {"dateText":"Date","timeText":"Time","teamMemberText":"Employee","bookingTimeText":"Booking"},
    depositPaymentSettings: {"createdAtTimeStamp":"1659553588779","shouldDelete":false,"isEnabled":false,"options":[],"uniqueId":"F3XMUQ3G4UYBCPHNJHH1Z91L","depositPaymentScreenInfoSettings":{"headingText":"Payment Options (Pay Deposit amount now, and remaining after the appointment): "},"checkoutInfoText":{"titleText":"Deposit for Service","remainingAmountText":"Remaining Balance before Tax and Shipping"},"id":2662,"createdAt":"2022-08-03T19:06:29.097Z","updatedAt":"2022-08-03T19:06:29.097Z","clientId":4100},
    productId: '',
    bookingId: '',
    auth: '',
    removeUnAvailableDays: true,
    parseVariantFromUrl: true,
    isManualBooking: false,
    slotsTimeFormat: 'hh:mm A',
    startTimeGapInterval: 15,
    freeBookingPhoneFieldEnabled: false,
    hideDefaultVariant: false,
    hideEndTime: false,
    showModalCart: false,
    isAdmin: false,
    showAvailabilityInClientTimezone: true
  }
  if (!window.appointlyClient) {
    window.AppointlyBookingClient=function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";var o=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))((function(n,a){function s(t){try{l(o.next(t))}catch(t){a(t)}}function r(t){try{l(o.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,r)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.AppointlyBookingClient=void 0;const n=i(1),a=i(2);let s=i(3);class r{constructor(){this.dateFormat="DD-MM-YYYY HH:mm",this.variantSubscriptionData={},this.dataPageProductId="data-page-product-id",this.cartRowSelector=".cart__row",this.cartQtySelector=".cart__qty",this.cartHideQuantity=!1,this.removeDuplicateSlots=!1,this.previousRemoveUnavailableDaysKey="",this.removeUnAvailableDaysObj={},this.isFirstTimeDateSelected=!1,this.dateFromTimestampStartBrowserFormat="ll",this.checkingIfCustomQuestionIsFilled=!1,this.processingAddToCart=!1,this.ignoreAddingPropertiesToCart=!1,this.defaultCountry="","undefined"!=typeof window&&(this.window=window),this.freeBookingUniqueId=this.getUniqueId(),console.log("Init Appointly Cleint")}assignDateLib(){return o(this,void 0,void 0,(function*(){if(this.window.appointlyMomentLoaded&&this.dateLib)return;let t=new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src","https://d3emjguzbsq9q3.cloudfront.net/appointly/api/js/moment-timezone.min.js?v=1656798860570"),i.setAttribute("defer",""),i.onload=()=>{t()},document.head.appendChild(i)});new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src","https://d3emjguzbsq9q3.cloudfront.net/appointly/api/js/moment-with-locales.min.js?v=1656798860570"),i.setAttribute("defer",""),i.onload=()=>{t()},document.head.appendChild(i)});yield Promise.all([t]),this.dateLib=window.moment,this.moment=this.dateLib,this.window.appointlyMomentLoaded=!0}))}getUniqueId(t=24){return s("123456789ABCDEFGHIJKLMNPQRSTUVWXYZ",t)}refresh(){this.removePopUp(this.config.booking.popUpSelector),this.window.appointlyClient=new r,this.window.appointlyClient.init(this.window.appointlyConfig)}init(t){return o(this,void 0,void 0,(function*(){this.config=t,!0!==this.config.isAdmin&&(this.config.isAdmin=!1),this.getDefaultCountry(),this.addStyles(),this.removeFieldsOnCartPage(),yield this.getService(null),yield this.parseButtonOnShopifyPage(),yield this.addFloatButton(),"6SRKVVJWP2U1PCAS8ZJHVNVR"===this.config.clientUniqueId&&setInterval(()=>{!this.service&&window.location.href.includes("teeth")?this.getService(null):this.service=null},500),this.processCartBooking().catch(t=>this.log("Error checking Cart Bookings",t))}))}log(t,...e){this.getValueIfExist(()=>this.window.location.href.includes("log=true")||this.config.isAdmin||"true"===this.getCookie("apntly-log"))&&(document.cookie="apntly-log=true;max-age=31104000;path=/",console.log(t,...e||[]))}logToServer(t){return o(this,void 0,void 0,(function*(){try{yield yield fetch(this.getUrl("/api/jsLog"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:`${this.window.Shopify.shop} | ${t}`})})}catch(t){this.log("Error during server Log",t)}}))}getCookie(t){let e=document.cookie,i={},o=e.split(";");if(""!==o[0]||void 0!==o[0][0])return o.forEach(t=>{let e=t.split(/=(.+)/);" "===e[0].substr(0,1)&&(e[0]=e[0].substr(1)),i[e[0]]=e[1]}),""!==t?i[t]:i}processCartBooking(){return o(this,void 0,void 0,(function*(){let t=(yield(yield fetch("/cart.js")).json()).items.filter(t=>this.getValueIfExist(()=>"Appointly"===t.properties._booking_by&&t.properties._add_to_cart_at<this.dateLib.tz(this.getCurrentTimeStamp(),this.getBrowserTimezone()).subtract(6,"hours")).valueOf());if(this.log("InValidCartItemsBookings",t),t.length)for(let e of t)this.logToServer("Removing CartItem "+e.properties._add_to_cart_at),yield(yield fetch("/cart/change.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.key,quantity:0})})).json();t.length&&window.location.reload()}))}parseButtonOnShopifyPage(){return o(this,void 0,void 0,(function*(){if(!this.service){let t=document.querySelector("#apntly-page-book-button");if(t){let e=this.getValueIfExist(()=>Number(t.attributes[this.dataPageProductId].value));e&&"null"!==e&&"undefined"!==e&&(t.addEventListener("click",t=>this.openBookModal(t)),this.getService(e))}}}))}convertTimeZone(t,e,i){let o=this.dateFormat;return this.dateLib.tz(t,o,e).tz(i)}getCurrentTimeStamp(){return this.dateLib().valueOf()}getUrl(t){return`${this.config.apiUrl}${t}`}getServiceForProduct(){fetch(this.getUrl("/api/"))}hideVariantSelector(){this.apntlyBookingModalData.showVariantContainer=!1}hideTeamMemberSelector(){this.apntlyBookingModalData.showTeamMemberContainer=!1}showTeamMemberSelector(){this.apntlyBookingModalData.showTeamMemberContainer=!0}isProductPage(){if(window.location.pathname.includes("product")||window.location.pathname.includes("collection"))return window.location.href.split("?")[0]}getProduct(){return o(this,void 0,void 0,(function*(){if(this.isProductPage()){if(!this.window.appointlyProduct||!this.window.appointlyProduct.variants){let t;try{t=yield(yield fetch(window.location.href.split("?")[0]+".js")).json()}catch(t){console.error("Error in fetching product",t)}t.id&&(this.processProduct(t),this.window.appointlyProduct=t)}return this.window.appointlyProduct}}))}processProduct(t){t&&t.variants&&t.variants.forEach&&t.variants.forEach(t=>{t.price=t.price/100})}addPopUp(t,e){if(console.debug("addPopup"),!document.getElementById(t)){let i=document.createElement("iframe");i.style.visibility="hidden",i.style.opacity="0",i.style.zIndex="-1",i.style.border="none",i.id=t,i.className="apntly-modal",i.srcdoc=e,document.body.appendChild(i)}}removePopUp(t){document.getElementById(t)&&document.body.removeChild(document.getElementById(t))}addStyles(){let t=this.config.customCss,e=document.createElement("style");e.type="text/css",e.innerText=t,document.head.appendChild(e)}addJs(){if(!this.config.customJs)return;let t=document.createElement("script");t.type="text/javascript";let e=document.createTextNode(this.config.customJs);t.appendChild(e),document.head.appendChild(t)}addToCartButtonNotFountEvent(){}addButton(t){return o(this,void 0,void 0,(function*(){let e;if(this.config.addToCartSelector&&(e=document.querySelector(this.config.addToCartSelector)),e||(e=document.querySelector('[name="add"]')||document.querySelector('[data-action="add-to-cart"]')||document.querySelector("[data-add-to-cart]")||document.querySelector(".product-form--add-to-cart")||document.querySelector(".product-form--atc-button")),console.log("Adding Button"),!e)return t<20?(console.log("Add to Cart Button Not found, Retrying"),yield this.sleep(200),void this.addButton(t+1)):void this.logToServer("Add to Cart Button Not found "+window.location.href);let i=e.className;this.addAddToCartClassesIgnoreList&&(i=i.split(" ").filter(t=>!this.addAddToCartClassesIgnoreList.split(" ").some(e=>e==t)).join(" "));let o=e.parentNode,n=document.createElement("div");"TUT9HR5MMDXUT2KXSPQJY6E6"===this.config.clientUniqueId&&(n=document.createElement("button")),n.id="apntly-book-button",n.className=i,n.innerText=this.config.widgetSettings.text,n.addEventListener("click",t=>this.openBookModal(t)),this.config.bookingButtonContainer?(o.removeChild(e),document.querySelector(this.config.bookingButtonContainer).appendChild(n)):o.replaceChild(n,e);if(!["949LUJDTEISMV5294RUSH2ZP"].some(t=>t===this.config.clientUniqueId)){let t=document.querySelector("[data-shopify='payment-button']");t&&(t.style.display="none")}this.productPageServiceExistEvent()}))}productPageServiceExistEvent(){}isFloatButtonConditionSatisfied(){return!0}addFloatButton(){if(this.service)return;if(!this.config.floatWidgetSettings.isEnabled)return;if(!this.isFloatButtonConditionSatisfied())return;if(!document.getElementById("apntly-float-button")){let t=document.createElement("button");t.className="apntly-float-button",t.type="button",t.innerText=this.config.floatWidgetSettings.text,document.body.appendChild(t),Number(this.config.floatWidgetSettings.onClickAction)===n.AppointlyFloatWidgetAction.OpenService?(t.onclick=t=>this.openBookModal(t),this.getService(this.config.floatWidgetSettings.onClickProductId)):Number(this.config.floatWidgetSettings.onClickAction)===n.AppointlyFloatWidgetAction.OpenUrl&&this.config.floatWidgetSettings.onClickUrl&&(t.onclick=t=>{window.location.href=this.config.floatWidgetSettings.onClickUrl})}}getSelectedUrlVariantUniqueId(){return o(this,void 0,void 0,(function*(){let t=this.getValueIfExist(()=>Number(new URLSearchParams(window.location.search).get("variant")));if(t)return this.getValueIfExist(()=>this.service.variants.find(e=>Number(e.variantId)===t).uniqueId);let e=t=>this.getValueIfExist(()=>(t=>[...document.querySelectorAll(`[data-index="option${t}"]`)||document.querySelectorAll("#Option-product-"+(t-1))])(t).find(t=>"radio"===t.type&&!0===t.checked||"radio"!==t.type).value),i=(yield e(1))||null,o=(yield e(2))||null,n=(yield e(3))||null;console.log(i,o,n);let a=((yield this.getProduct())||{variants:[]}).variants.find(t=>t.option1===i&&t.option2===o&&t.option3===n);if(console.log(a),t=a&&a.id,!t){let e=((yield this.getProduct())||{variants:[]}).variants[0];t=e&&e.id}return this.getValueIfExist(()=>this.service.variants.find(e=>Number(e.variantId)===t).uniqueId)}))}openBookModal(t){return o(this,void 0,void 0,(function*(){if(this.isFirstTimeDateSelected=!1,!this.service)return;let e=this.getValueIfExist(()=>Number(t.target.attributes[this.dataPageProductId].value));if("9X1BAZESDE72KSRIVYK3EP2M"===this.config.clientUniqueId&&this.getService(null),e&&"null"!==e&&"undefined"!==e)return console.log("PageProductId",e),document.getElementById(this.config.booking.popUpSelector).style.visibility="visible",document.getElementById(this.config.booking.popUpSelector).style.opacity="1",void(document.getElementById(this.config.booking.popUpSelector).style.zIndex="999999999");if(document.getElementById(this.config.booking.popUpSelector).style.visibility="visible",document.getElementById(this.config.booking.popUpSelector).style.opacity="1",document.getElementById(this.config.booking.popUpSelector).style.zIndex="999999999",!0===this.config.parseVariantFromUrl){let t=yield this.getSelectedUrlVariantUniqueId();this.apntlyBookingModalData.variants.find(e=>e.value===t)?(this.apntlyBookingModalData.selectedVariant=t,this.apntlyBookingModalData.variantKey="vk-"+(new Date).valueOf(),console.log("Parsed Variant Automatically",this.apntlyBookingModalData.selectedVariant),this.onSelectionChange()):console.log("Can't parse Variant Automatically")}this.config.hideDefaultVariant&&1===this.service.variants.length&&this.getValueIfExist(()=>"default title"===this.service.variants[0].title.toLowerCase())&&this.hideVariantSelector()}))}closeBookModal(){document.getElementById(this.config.booking.popUpSelector).style.visibility="hidden",document.getElementById(this.config.booking.popUpSelector).style.opacity="0",document.getElementById(this.config.booking.popUpSelector).style.zIndex="-1"}waitTillModalNotAdded(){return o(this,void 0,void 0,(function*(){for(;!this.window.apntlyBookingModal;)yield this.sleep(300),console.debug("Waiting For booking Modal Availability")}))}getValueIfExist(t){try{return t()}catch(t){return}}removeFieldsOnCartPage(){return o(this,void 0,void 0,(function*(){try{if(this.config.removeFieldsOnCartPageJs&&this.config.removeFieldsOnCartPageJs.trim()){let t=document.createElement("script");t.type="text/javascript";let e=document.createTextNode(this.config.removeFieldsOnCartPageJs);t.appendChild(e),document.head.appendChild(t)}if(this.window.location.pathname.includes("cart")){(yield(yield fetch("/cart.js")).json()).items.filter(t=>this.getValueIfExist(()=>"Appointly"===t.properties._booking_by)).length>0&&this.window.location.pathname.includes("cart")&&(document.querySelectorAll(".product-details__item.product-details__item--property")&&[...document.querySelectorAll(".product-details__item.product-details__item--property")].map(t=>this.getValueIfExist(()=>t.children[0].innerText.startsWith("_"))?t.style.display="none":""),document.querySelectorAll(this.cartRowSelector)&&this.cartHideQuantity&&this.config.bookingInfoSettings.bookingTimeText&&this.config.bookingInfoSettings.bookingTimeText.trim()&&this.getValueIfExist(()=>{[...document.querySelectorAll(this.cartRowSelector)].filter(t=>t.innerHTML&&t.innerHTML.includes(this.config.bookingInfoSettings.bookingTimeText+":")).map(t=>[...t.querySelectorAll(this.cartQtySelector)].map(t=>t.style.visibility="hidden"))}))}}catch(t){console.error(t)}}))}getService(t){return o(this,void 0,void 0,(function*(){let e=t,i=!1;if(!t)if(this.config.productId)t=this.config.productId;else{let e=yield this.getProduct();if(!e)return;i=!0,t=e.id}if("product"===t)return yield this.sleep(100),yield this.getService(e);try{if(!this.config.isAdmin&&!(yield this.isServiceActive(t)))return}catch(t){this.logToServer(`Cant get IsActiveData ${window.location.href} ${t.message}`)}this.addPopUp(this.config.booking.popUpSelector,this.config.booking.bookingHtml),i&&this.addButton(0),yield this.assignDateLib();let o=yield(yield fetch(this.getUrl(`/api/service/${t}/bookingData`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:t,clientUniqueId:this.config.clientUniqueId})})).json();if(o.service&&(this.config.isAdmin||o.service.isActive)){if(yield this.waitTillModalNotAdded(),console.log("Appointly Modal Data",this.window.apntlyBookingModal.$data),yield this.addJs(),console.log(o),this.apntlyBookingModalData=this.window.apntlyBookingModal.$data,this.bookingData=o,this.service=o.service,this.apntlyBookingModalData.variants=this.service.variants.map(t=>({text:t.title,value:t.uniqueId})),this.apntlyBookingModalData.selectedVariant=this.apntlyBookingModalData.variants[0].value,this.config.bookingId){console.log("Booking Id Exist",this.config.bookingId);let t=yield(yield fetch(this.getUrl(`/api/bookings/${this.config.bookingId}?auth=${this.config.auth}`),{method:"GET",headers:{"Content-Type":"application/json"}})).json();this.previousAppointmentData=t;let e=this.service.variants.find(t=>t.uniqueId===this.previousAppointmentData.serviceVariant.uniqueId);e&&(this.apntlyBookingModalData.selectedVariant=e.uniqueId),this.apntlyBookingModalData.variantEmployees=e.teamMembers.map(t=>({text:t.name,value:t.uniqueId})),this.apntlyBookingModalData.selectedEmployee=t.teamMember.uniqueId}this.apntlyBookingModalData.variantKey="vk-"+(new Date).valueOf(),yield this.onSelectionChange()}}))}onSelectionChange(){return o(this,void 0,void 0,(function*(){this.apntlyBookingModalData.isLoading=!0,this.showModalCart()||(this.apntlyBookingModalData.cartItems=[],this.isBookNowButtonDisabled());let t=this.apntlyBookingModalData.selectedVariant,e=this.service.variants.find(e=>e.uniqueId===t);e||(e=this.service.variants[0]),this.isSubscriptionAppointment(e.uniqueId)&&(this.variantSubscriptionData[e.uniqueId]=yield this.getSubscriptionBookingData(e.uniqueId),yield this.getSubscriptionAppointmentMessage(),this.isBookNowButtonDisabled()),this.apntlyBookingModalData.variantEmployees=e.teamMembers.map(t=>({text:t.name,value:t.uniqueId})),this.apntlyBookingModalData.variantEmployees.find(t=>t.value===this.apntlyBookingModalData.selectedEmployee)||(this.apntlyBookingModalData.selectedEmployee=this.apntlyBookingModalData.variantEmployees[0].value),this.apntlyBookingModalData.employeeKey="ek-"+(new Date).valueOf();let i=e.teamMembers.find(t=>t.uniqueId===this.apntlyBookingModalData.selectedEmployee),o=[],n=this.getSelectedDate(),a=[];a=this.mergeTeamMemberSlots()?e.teamMembers:[i];for(let t of a){let i=this.getTeamMemberData(e,t),a=yield this.getFreeSlots(i.bookedSlots,i.events,e,t,i.availability,this.config.clientTimezone,this.getBrowserTimezone(),n,!1);o.push(...a)}if(a.length>1){if(this.removeDuplicateSlots){let t=[];for(let e of o)if(-1===t.findIndex(t=>t.bookingTimestamp===e.bookingTimestamp)){let i=o.filter(t=>t.bookingTimestamp===e.bookingTimestamp&&e.available)[0];i?t.push(i):t.push(e)}o=[...t]}o=o.sort((t,e)=>this.dateLib.tz(t.clientStart,this.config.clientTimezone).valueOf()-this.dateLib.tz(e.clientStart,this.config.clientTimezone).valueOf())}this.apntlyBookingModalData.timeSlots=[],this.apntlyBookingModalData.timeSlots=o,this.apntlyBookingModalData.timeSlotKey="ek-"+(new Date).valueOf(),this.config.removeUnAvailableDays&&(yield this.removeUnAvailableDays()),this.apntlyBookingModalData.isLoading=!1}))}getTeamMemberAvailability(t){return this.config.isAdmin&&this.apntlyBookingModalData.showAllSlots?this.getAlwaysAvailiableTimings():this.bookingData.availabilities.find(e=>e.id===t.availiabilityId)}getTeamMemberBookings(t){return this.config.isAdmin&&this.apntlyBookingModalData.ignoreBookedSlots?[]:this.bookingData.teamMembers.find(e=>e.uniqueId===t.uniqueId).bookings}getTeamMemberEvents(t){return this.config.isAdmin&&this.apntlyBookingModalData.ignoreBookedSlots?[]:this.bookingData.teamMembers.find(e=>e.uniqueId===t.uniqueId).events}getAlwaysAvailiableTimings(){let t={};return t.weekDayAvailabilities=[{weekDay:n.AppointlyWeekDay.Sunday,slots:[{start:"00:15",end:"23:45"}]},{weekDay:n.AppointlyWeekDay.Monday,slots:[{start:"00:15",end:"23:45"}]},{weekDay:n.AppointlyWeekDay.Tuesday,slots:[{start:"00:15",end:"23:45"}]},{weekDay:n.AppointlyWeekDay.Wednesday,slots:[{start:"00:15",end:"23:45"}]},{weekDay:n.AppointlyWeekDay.Thursday,slots:[{start:"00:15",end:"23:45"}]},{weekDay:n.AppointlyWeekDay.Friday,slots:[{start:"00:15",end:"23:45"}]},{weekDay:n.AppointlyWeekDay.Saturday,slots:[{start:"00:15",end:"23:45"}]}],t.specialDayAvailabilities=[],t}isAdmin(){return this.config.isAdmin}getTeamMemberData(t,e){let i=this.getTeamMemberAvailability(e);this.apntlyBookingModalData.maxDate=this.dateLib.tz(this.getCurrentTimeStamp(),this.getBrowserTimezone()).add(Number(t.maxFutureDayNo),"days").toDate(),this.config.isAdmin&&this.apntlyBookingModalData.showAllSlots&&(this.apntlyBookingModalData.maxDate=null);let o=this.getTeamMemberBookings(e),n=this.getTeamMemberEvents(e);return this.config.bookingId&&(o=o.filter(t=>t.uniqueId!==this.config.bookingId)),{bookedSlots:o,events:n,availability:i}}setIsFirstTimeDateSelected(t){this.isFirstTimeDateSelected=t}removeUnAvailableDays(){return o(this,void 0,void 0,(function*(){this.apntlyBookingModalData.disabledDates=[],this.apntlyBookingModalData.availableDates=[];let t=[],e=this.apntlyBookingModalData.selectedVariant,i=this.service.variants.find(t=>t.uniqueId===e);i||(i=this.service.variants[0]);let o=i.teamMembers.find(t=>t.uniqueId===this.apntlyBookingModalData.selectedEmployee),n=[];n=this.mergeTeamMemberSlots()?i.teamMembers:[o];let a=`${i.uniqueId}-${n.map(t=>t.uniqueId).join("-")}-firstAvailable`,s=this.removeUnAvailableDaysObj[a],r=!0,l=null,d=null;s&&(r=!1,l=this.getValueIfExist(()=>this.window.apntlyBookingModal.$refs.datep.$refs.calendar.getPageDays().find(t=>t.inMonth).month),d=this.getValueIfExist(()=>this.window.apntlyBookingModal.$refs.datep.$refs.calendar.getPageDays().find(t=>t.inMonth).year));let u=`${i.uniqueId}-${n.map(t=>t.uniqueId).join("-")}-${l}-${d}`;if(this.removeUnAvailableDaysObj[u])return void(this.apntlyBookingModalData.disabledDates=this.removeUnAvailableDaysObj[u]);yield this.sleep(100),console.log("Removing Unavailable dates: "+u);let c=this.dateLib.tz(new Date,this.getBrowserTimezone()).subtract(1,"days");l&&(c=this.dateLib.tz(`01-${l<10?"0":""}${l}-${d}`,"DD-MM-YYYY",this.getBrowserTimezone()));let h=0,p=90;l&&(p=31);let m=this.dateLib.tz(this.apntlyBookingModalData.selectedDate,this.getBrowserTimezone()).endOf("month").diff(c.clone().add(90,"days"),"days");for(m>0&&m<=31&&(console.log("daysToAddFromFirstAvailableDate",m),p=p+m+1),"2MYNK9LEDA2668TM9IE5WUN5"===this.config.clientUniqueId&&(p=500);h<p;){let e=[];for(let t of n){let o=this.getTeamMemberData(i,t),n=yield this.getFreeSlots(o.bookedSlots,o.events,i,t,o.availability,this.config.clientTimezone,this.getBrowserTimezone(),c.format("DD-MM-YYYY"),!0);if(n=n.filter(t=>!0===t.available),n.length>0&&!s&&(s=c.toDate(),this.removeUnAvailableDaysObj[a]=s,console.log("firstAvailableDate",s)),n.length>0){this.apntlyBookingModalData.availableDates.push({start:new Date(c.year(),c.month(),c.date()),end:new Date(c.year(),c.month(),c.date())}),e.push(...n),c.format("DD-MM-YYYY")===this.getSelectedDate()&&(r=!1);break}}0===e.length&&t.push(new Date(c.year(),c.month(),c.date())),c=c.add(1,"day"),h++}this.apntlyBookingModalData.disabledDates=t,this.removeUnAvailableDaysObj[u]=this.apntlyBookingModalData.disabledDates,this.moveToFirstAvailableDate(s,r)}))}moveToFirstAvailableDate(t,e){this.isFirstTimeDateSelected||(e=!0,this.isFirstTimeDateSelected=!0);let i=new Date(this.dateLib.tz(t,this.getBrowserTimezone()).year(),this.dateLib.tz(t,this.getBrowserTimezone()).month(),this.dateLib.tz(t,this.getBrowserTimezone()).date()),o=new Date(this.dateLib.tz(this.getCurrentTimeStamp(),this.getBrowserTimezone()).year(),this.dateLib.tz(this.getCurrentTimeStamp(),this.getBrowserTimezone()).month(),this.dateLib.tz(this.getCurrentTimeStamp(),this.getBrowserTimezone()).date()),n=Math.abs(this.dateLib.tz(i,this.getBrowserTimezone()).diff(this.dateLib.tz(o,this.getBrowserTimezone()),"days")),a=Number(this.getSelectedVariant().maxFutureDayNo||0);n>a?console.log(`Not Setting First Available Date because Difference In days is greater than Max Future Days  Diff:${n} MaxFutureDay:${a}`):t&&e&&(console.log("Selecting First Available Date "+this.dateLib.tz(t,this.getBrowserTimezone()).format()+" Diff:"+n),this.apntlyBookingModalData.selectedDate=i,this.apntlyBookingModalData.calendarKey="ck-"+(new Date).valueOf(),this.onSelectionChange())}isServiceActive(t){return o(this,void 0,void 0,(function*(){if(this.window.activeServiceProductIds&&this.window.activeServiceProductIds.length>0&&this.window.activeServiceProductIds.some(e=>Number(e)===Number(t)))return!0;let e=yield(yield fetch(this.getUrl(`/api/service/${t}/isActive`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:t,clientUniqueId:this.config.clientUniqueId})})).json();return e&&!0===e.isActive}))}getBrowserTimezone(){return this.config.showAvailabilityInClientTimezone?this.config.clientTimezone:this.getCustomerTimeZone()}getCustomerTimeZone(){return Intl.DateTimeFormat().resolvedOptions().timeZone}getSelectedDate(){return this.config.showAvailabilityInClientTimezone?this.dateLib(this.apntlyBookingModalData.selectedDate).format("DD-MM-YYYY"):this.dateLib.tz(this.apntlyBookingModalData.selectedDate,this.getBrowserTimezone()).format("DD-MM-YYYY")}getSelectedDateBrowserFormatted(){return this.dateLib.tz(this.apntlyBookingModalData.selectedDate,this.getBrowserTimezone()).format("ll")}getDateFromTimestampStartBrowserFormatted(t){return this.dateLib.tz(t,this.getBrowserTimezone()).format(this.dateFromTimestampStartBrowserFormat)}sleep(t){return o(this,void 0,void 0,(function*(){return new Promise(e=>{setTimeout(()=>{e()},t)})}))}checkIfEmailValid(t){return t&&/\S+@\S+\.\S+/.test(t)}checkIfPhoneNumberValid(t){return t=t.replace(/-/g,"").replace(/ /g,"").replace(/\(/g,"").replace(/\)/g,""),!Number.isNaN(t)&&(parseInt(t)===Number(t)&&!(parseInt(t)<100))}isPhoneFieldEnabledInFreeBooking(){return this.config.freeBookingPhoneFieldEnabled}showServiceDurationInBookedSlot(){return!1}isRescheduleEvent(){return this.config.bookingId}mergeTeamMemberSlots(){let t=this.serviceMergeTeamMemberEnabled();return t&&this.isAdmin()&&(t=this.apntlyBookingModalData.adminMergeTeamMember),t?this.hideTeamMemberSelector():this.showTeamMemberSelector(),t}serviceMergeTeamMemberEnabled(){return this.service&&this.service.mergeTeamMemberSlots}adminSlotChanged(){return o(this,void 0,void 0,(function*(){console.log("admin slot changed"),yield this.sleep(1e3),this.removeUnAvailableDaysObj={},this.onSelectionChange()}))}getFreeSlots(t,e,i,n,s,r,l,d,u){return o(this,void 0,void 0,(function*(){t=JSON.parse(JSON.stringify(t)),e=JSON.parse(JSON.stringify(e)),i=JSON.parse(JSON.stringify(i)),s=JSON.parse(JSON.stringify(s)),t=t.map(t=>{let e=Object.assign({},t);return e.bookingTimestamp=e.bookingTimestamp-60*i.bufferTimeBefore*1e3,e.durationInMin=Number(e.durationInMin)+i.bufferTimeAfter+i.bufferTimeBefore,e});let o=[],c=i.availability,h=this.dateLib.tz(this.dateLib.tz(d+" 00:00",this.dateFormat,l).subtract(1,"day").format("DD-MM-YYYY")+" 00:01",this.dateFormat,r),p=this.dateLib.tz(this.dateLib.tz(d+" 00:00",this.dateFormat,l).add(1,"day").format("DD-MM-YYYY")+" 23:59",this.dateFormat,r);for(;p.isAfter(h);){let p=h.isoWeekday(),m=[],g=s.specialDayAvailabilities.find(t=>t.day===h.format("DD-MM-YYYY"));if(g)m=g.slots;else{let t=s.weekDayAvailabilities.find(t=>t.weekDay===p);t&&(m=t.slots)}let f=[],y=c.specialDayAvailabilities.find(t=>t.day===h.format("DD-MM-YYYY"));if(y)f=y.slots;else{let t=c.weekDayAvailabilities.find(t=>t.weekDay===p);t&&(f=t.slots)}this.isAdmin()&&this.apntlyBookingModalData.showAllSlots&&(f=this.getAlwaysAvailiableTimings().weekDayAvailabilities.find(t=>t.weekDay===p).slots);let v=[];if(i.isTimingsEnabled)for(let t of m)f.map(e=>{let i=60*Number(e.start.split(":")[0])+Number(e.start.split(":")[1]),o=60*Number(e.end.split(":")[0])+Number(e.end.split(":")[1]),n=60*Number(t.start.split(":")[0])+Number(t.start.split(":")[1]),a=60*Number(t.end.split(":")[0])+Number(t.end.split(":")[1]);n>=i&&a<=o?v.push(t):n<=i&&a>=o?v.push({start:e.start,end:e.end}):n<=i&&a<=o?v.push({start:e.start,end:t.end}):n>=i&&n<=o&&a>=o&&v.push({start:t.start,end:e.end})});else v=m;v=v.sort((t,e)=>60*Number(t.start.split(":")[0])-60*Number(e.end.split(":")[0]));for(let s of v){let c=i.durationInMin,p=Number(s.start.split(":")[0]),m=Number(s.start.split(":")[1]),g=this.dateLib.tz(h.clone().format(`DD-MM-YYYY ${p}:${m}`),this.dateFormat,r),f=Number(s.end.split(":")[0]),y=Number(s.end.split(":")[1]),v=this.dateLib.tz(h.clone().format(`DD-MM-YYYY ${f}:${y}`),this.dateFormat,r);if(v.valueOf()<this.dateLib.tz(this.getCurrentTimeStamp(),r).valueOf())continue;let b=60*i.cutoffMins*1e3;this.isAdmin()&&this.apntlyBookingModalData.showAllSlots&&(b=0),g.valueOf()<this.dateLib.tz(this.getCurrentTimeStamp(),r).valueOf()+b&&(g=this.dateLib.tz(this.dateLib.tz(this.getCurrentTimeStamp(),r).valueOf()+b,r));let S=[];if(i.startTimeIncrementInMin>0&&this.config.startTimeGapInterval>5&&(this.config.startTimeGapInterval=5),this.config.startTimeGapInterval>0){let t=0;for(;t<=60;)S.push(t),t+=this.config.startTimeGapInterval}for(;g<v;){if(this.config.startTimeGapInterval>0){let t=Number(g.clone().format("mm"));if(!S.some(e=>e===t)){let e=S.find(e=>e>t)-t;g=this.dateLib.tz(g.valueOf()+60*e*1e3,r),g.isValid()||console.error("Start Time is not valid")}}if(g.clone().add(c,"minutes").valueOf()<=v.valueOf()){let s,h=this.convertTimeZone(g.format(this.dateFormat),r,l);if(h.format("DD-MM-YYYY")===d){let d=a.AppointlyGroupProcessData.isJointGroupAvailability(this.config.clientUniqueId);if(s=t.find(t=>Math.max(g.clone().valueOf(),t.bookingTimestamp)<Math.min(g.clone().add(c,"minutes").valueOf(),this.dateLib.tz(t.bookingTimestamp,r).add(t.durationInMin,"minutes").valueOf())),s&&d){s=JSON.parse(JSON.stringify(s));let e=t.filter(t=>Math.max(g.clone().valueOf(),t.bookingTimestamp)<Math.min(g.clone().add(c,"minutes").valueOf(),this.dateLib.tz(t.bookingTimestamp,r).add(t.durationInMin,"minutes").valueOf()));s.noOfSameTimeBooking=0;for(let t of e)s.noOfSameTimeBooking=s.noOfSameTimeBooking+t.noOfSameTimeBooking;console.log(`Number of Same time slots: ${s.noOfSameTimeBooking} ${g.format("lll")}`)}let p=!1;if(s&&(p=!0),this.showModalCart()){let t=this.apntlyBookingModalData.cartItems.filter(t=>t.timeSlot.employee.uniqueId===n.uniqueId).filter(t=>Math.max(g.clone().valueOf(),t.timeSlot.bookingTimestamp)<Math.min(g.clone().add(c,"minutes").valueOf(),t.timeSlot.bookingTimestamp+60*t.timeSlot.bookingDuration*1e3)),e=(s?s.noOfSameTimeBooking:0)+t.length;s?s.noOfSameTimeBooking=e:t.length>0&&(p=!0,s={bookingTimestamp:t[0].timeSlot.bookingTimestamp,durationInMin:t[0].timeSlot.bookingDuration,noOfSameTimeBooking:e,serviceVariantUniqueId:t[0].timeSlot.serviceVariant.uniqueId})}if(p&&i.isGroupAppointment&&(console.log("isGroupAppointment",i.isGroupAppointment),s.noOfSameTimeBooking<i.groupAppointmentCapacity&&(d||s.serviceVariantUniqueId===i.uniqueId)&&(p=!1)),!p){let t=e.find(t=>Math.max(g.clone().valueOf(),t.startTimeStamp)<Math.min(g.clone().add(c,"minutes").valueOf(),t.endTimeStamp));t&&(p=!0,s={bookingTimestamp:t.startTimeStamp,durationInMin:Math.floor((t.endTimeStamp-t.startTimeStamp)/6e4),noOfSameTimeBooking:1,calendarEvent:t})}if(p){s&&console.log("sameTimeBookedSlot",s);let t="";t=this.showServiceDurationInBookedSlot()?g.clone().add(c,"minutes").format(this.config.slotsTimeFormat):this.dateLib.tz(this.dateLib.tz(s.bookingTimestamp,l).add(s.durationInMin,"minutes").valueOf(),l).format(this.config.slotsTimeFormat),o.push({start:h.format(this.config.slotsTimeFormat),end:t,clientStart:g.format(),clientEnd:g.clone().add(c,"minutes").format(),available:!1,bookingTimestamp:null,bookingDuration:null,serviceVariant:i,employee:n,noOfSameTimeBooking:s?s.noOfSameTimeBooking:0,totalAllowedSlots:i.isGroupAppointment?i.groupAppointmentCapacity:1}),g=this.dateLib.tz(this.dateLib.tz(s.bookingTimestamp,r).add(s.durationInMin,"minutes").valueOf(),r);continue}if(o.push({start:h.format(this.config.slotsTimeFormat),end:h.clone().add(c,"minutes").format(this.config.slotsTimeFormat),clientStart:g.format(),clientEnd:g.clone().add(c,"minutes").format(),available:!0,bookingTimestamp:g.valueOf(),bookingDuration:c,serviceVariant:i,employee:n,noOfSameTimeBooking:s?s.noOfSameTimeBooking:0,totalAllowedSlots:i.isGroupAppointment?i.groupAppointmentCapacity:1}),u)return o}}g=this.isAdmin()&&this.apntlyBookingModalData.showAllSlots?g.add(15,"minutes"):0===i.startTimeIncrementInMin?g.add(c,"minutes"):g.add(i.startTimeIncrementInMin,"minutes")}}h=h.add(1,"day")}return o}))}getCartItemQuestions(){if(this.config.bookingId){let t=this.apntlyBookingModalData.cartItems[0],e=t.timeSlot.serviceVariant;if(e.uniqueId===this.previousAppointmentData.serviceVariant.uniqueId){if(!t.isReScheduleQuestionsProcessed){this.getValueIfExist(()=>JSON.parse(JSON.stringify(this.previousAppointmentData.properties._data.questions)).length>0)?e.uniqueId===this.previousAppointmentData.serviceVariant.uniqueId&&Object.assign(e.questions,JSON.parse(JSON.stringify(this.previousAppointmentData.properties._data.questions))):Object.assign(e.questions,[])}t.isReScheduleQuestionsProcessed=!0}}let t=[];return this.apntlyBookingModalData.cartItems.map(e=>{let i=e.timeSlot.serviceVariant;i.questions&&i.questions.length>0&&t.push(...i.questions)}),t}onBookNowClicked(){return o(this,void 0,void 0,(function*(){yield this.getProduct();console.log("bookingId",this.config.bookingId);let t=this.getCartItemQuestions();this.checkingIfCustomQuestionIsFilled||(this.checkingIfCustomQuestionIsFilled=!0,this.window.apntlyBookingModal.calculateCustomQuestionsButtonDisabled(),this.checkingIfCustomQuestionIsFilled=!1),t.length>0?(t.map(t=>{t.answer=t.answer||""}),this.apntlyBookingModalData.questions=t,this.apntlyBookingModalData.screen=2):this.config.bookingId?this.addToCart():this.service.isFreeService||this.config.isManualBooking?this.apntlyBookingModalData.screen=3:this.config.depositPaymentSettings.isEnabled?this.apntlyBookingModalData.screen=5:this.addToCart()}))}hideEndTime(){return this.config.hideEndTime}showModalCart(){return!this.config.bookingId&&(!this.service.variants.some(t=>t.isSubscriptionAppointment)&&this.config.showModalCart)}showTimeSlotMeta(){return!(!this.getSelectedVariant()||!this.getSelectedVariant().isGroupAppointment)&&!!["WLVGLAKCAD5E6Z87MF13ITCP","LR7F7B6GQBCSGS5JVBY93CJU"].some(t=>t===this.config.clientUniqueId)}useMobileTopCalendarSelectorLayout(){return!["2MYNK9LEDA2668TM9IE5WUN5"].some(t=>t===this.config.clientUniqueId)}isSubscriptionAppointment(t){return this.service.variants.find(e=>e.uniqueId===t).isSubscriptionAppointment}getSubscriptionAppointmentMessage(){return o(this,void 0,void 0,(function*(){if(!this.getCustomerId())return this.apntlyBookingModalData.subscriptionAppointmentMessage="This is a Subscription Booking, account is required to book an appointment. Please login to Continue.","5TV6GCSP966ISLXK9Y1Z3IBK"===this.config.clientUniqueId&&(this.apntlyBookingModalData.subscriptionAppointmentMessage="Esta é uma subscrição, é necessária uma conta. Por favor faça o login para continuar."),void this.setBookNowButtonState(!0);let t=yield this.variantSubscriptionData[this.getSelectedVariant().uniqueId];t.subscriptionSetting;t.isBookingPending||this.setBookNowButtonState(!0),t.subscriptionAppointmentMessage&&(this.apntlyBookingModalData.subscriptionAppointmentMessage=t.subscriptionAppointmentMessage)}))}setBookNowButtonState(t){this.apntlyBookingModalData.bookNowDisabled=t,this.apntlyBookingModalData.bookNowButtonKey="bookbk-"+(new Date).valueOf()}isBookNowButtonDisabled(){return 0===this.apntlyBookingModalData.cartItems.length||this.isCartItemSubscriptionAppointment()&&!this.getCustomerId()?this.setBookNowButtonState(!0):this.setBookNowButtonState(!1)}getCustomerId(){return this.window.__st&&this.window.__st.cid||this.getValueIfExist(()=>this.window.ShopifyAnalytics.meta.page.customerId)}getSubscriptionBookingData(t){return o(this,void 0,void 0,(function*(){let e=yield this.getCustomerId();return yield(yield fetch(this.getUrl(`/api/service/${this.service.productId}/subscriptionData`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subscriptionVariantUniqueId:t,clientUniqueId:this.config.clientUniqueId,shopifyCustomerId:e})})).json()}))}getCurrentVariantPrice(){if(this.config.productId||this.config.isManualBooking)return"";let t=this.window.appointlyProduct;if(!t||!this.service)return"";let e=this.getSelectedVariant(),i=this.getValueIfExist(()=>t.variants.find(t=>t.id===Number(e.variantId)).price);return i&&(i=this.getValueIfExist(()=>this.window.theme.moneyFormat.replace("{{amount}}",i))),i}customQuestionsButtonClicked(){return o(this,void 0,void 0,(function*(){this.config.bookingId?this.addToCart():this.service.isFreeService||this.config.isManualBooking?this.apntlyBookingModalData.screen=3:this.config.depositPaymentSettings.isEnabled?this.apntlyBookingModalData.screen=5:this.addToCart()}))}customerDetailsQuestionsButtonClicked(){return o(this,void 0,void 0,(function*(){yield this.addToCart()}))}depositPaymentButtonClicked(){return o(this,void 0,void 0,(function*(){yield this.addToCart()}))}getSelectedSlot(){return this.apntlyBookingModalData&&this.apntlyBookingModalData.cartItems[0]&&this.apntlyBookingModalData.cartItems[0].timeSlot}getSelectedVariant(){return this.service.variants.find(t=>t.uniqueId===this.apntlyBookingModalData.selectedVariant)}processReschedule(t){return o(this,void 0,void 0,(function*(){yield this.window.onReschedule(t)}))}processFreeBooking(){return o(this,void 0,void 0,(function*(){this.apntlyBookingModalData.screen=3}))}addFreeBooking(t){return o(this,void 0,void 0,(function*(){let e=t.map((t,e)=>(t._data.customerDetailQuestions=this.apntlyBookingModalData.customerDetailQuestions,{freeBookingLineItemId:"line-item-"+e,properties:t})),i=this.config.apiUrl+"/api/bookings/create/free",o=yield yield fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientUniqueId:this.config.clientUniqueId,freeBookingUniqueId:this.freeBookingUniqueId,freeBookingLineItems:e})});200!==o.status&&201!==o.status||(this.apntlyBookingModalData.screen=4)}))}addBookingProperty(t){return o(this,void 0,void 0,(function*(){let e=t.map((t,e)=>({uniqueId:t._unique_id,properties:t})),i=this.config.apiUrl+"/api/bookings/create/properties",o=yield yield fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientUniqueId:this.config.clientUniqueId,bookingLineItems:e})});return 200===o.status||(yield this.logToServer(`Error Adding Booking Property Data:${o.status} BookingLineItems:${JSON.stringify(e)}`),!1)}))}getBookingHeadingText(){return this.config.bookingInfoSettings.bookingTimeText}getDepositPaymentOptions(){return this.config.depositPaymentSettings.options}addToCart(){return o(this,void 0,void 0,(function*(){if(this.processingAddToCart)return;this.processingAddToCart=!0;let t=[];for(let e of this.apntlyBookingModalData.cartItems){let i=e.timeSlot,o=i.serviceVariant,n=o.variantId,a=o.teamMembers.find(t=>t.uniqueId===i.employee.uniqueId),s={_booking_by:"Appointly",[this.config.bookingInfoSettings.bookingTimeText]:`${this.config.bookingInfoSettings.dateText}: ${this.getDateFromTimestampStartBrowserFormatted(i.bookingTimestamp)} ${this.config.bookingInfoSettings.timeText}: ${i.start} - ${i.end}`,_booking_start_timestamp:i.bookingTimestamp,_booking_duration:i.bookingDuration,_browser_timezone:this.getBrowserTimezone(),[this.config.bookingInfoSettings.teamMemberText]:a.name,_employee_unique_id:a.uniqueId,_add_to_cart_at:this.dateLib.tz(this.getCurrentTimeStamp(),this.getBrowserTimezone()).valueOf(),_unique_id:this.getUniqueId()},r={};r=s,r._data=JSON.parse(JSON.stringify(s)),r._data=JSON.parse(JSON.stringify(s)),r._data.questions=o.questions,r._data.shopifyVariantId=n,r._data.shopifyProductId=this.service.productId,r._data.isAdmin=this.isAdmin(),r._data._customer_timezone=this.getCustomerTimeZone(),this.isAdmin()&&(r._data.sendEmail=this.apntlyBookingModalData.sendEmail),r._data.isSubscriptionAppointment=this.isSubscriptionAppointment(o.uniqueId),r._data.shopifyCustomerId=this.getCustomerId(),console.log("FreeService",this.service.isFreeService),t.push({quantity:1,id:Number(n),properties:r})}if(this.config.bookingId)return yield this.processReschedule(t[0].properties),void(this.processingAddToCart=!1);let e=this.isCartItemFreeSubscriptionAppointment();if(this.service.isFreeService||this.config.isManualBooking||e)return void this.addFreeBooking(t.map(t=>t.properties));if(this.config.depositPaymentSettings.isEnabled)return void this.getCheckoutUrl(t.map(t=>t.properties));if(!(yield this.addBookingProperty(t.map(t=>t.properties)))&&(this.log("Error Adding Properties To Server"),this.ignoreAddingPropertiesToCart))return;let i=JSON.parse(JSON.stringify(t));this.ignoreAddingPropertiesToCart&&(i=i.map(t=>{let e={};return["_booking_by","_browser_timezone",this.config.bookingInfoSettings.bookingTimeText,this.config.bookingInfoSettings.teamMemberText,"_unique_id"].map(i=>{e[i]=t.properties[i]}),{quantity:1,id:Number(t.id),properties:e}}));let o=`https://${window.location.host}/cart/add.js`,n=yield yield fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:i})});this.processingAddToCart=!1,200===n.status?window.location.pathname="/cart":console.error("Add to cart resp",n)}))}isCartItemFreeSubscriptionAppointment(){return this.isCartItemSubscriptionAppointment()&&this.variantSubscriptionData[this.apntlyBookingModalData.cartItems[0].timeSlot.serviceVariant.uniqueId].skipPayment}isCartItemSubscriptionAppointment(){return this.isSubscriptionAppointment(this.apntlyBookingModalData.cartItems[0].timeSlot.serviceVariant.uniqueId)}getDefaultCountry(){return this.defaultCountry||this.getValueIfExist(()=>{fetch("https://www.cloudflare.com/cdn-cgi/trace",{method:"GET"}).then(t=>o(this,void 0,void 0,(function*(){let e=yield t.text();this.defaultCountry=e.split("\n").find(t=>t.includes("loc")).split("=")[1].trim()})))}),this.defaultCountry}getCheckoutUrl(t){return o(this,void 0,void 0,(function*(){let e=yield this.getProduct(),i=t.map((t,i)=>{let o=e.variants.find(e=>Number(e.id)===Number(t._data.shopifyVariantId)).price;return{properties:t,uniqueId:t._unique_id,price:o}}),o=`${this.config.apiUrl}/api/client/${this.config.clientUniqueId}/deposits/create`,n=yield fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientUniqueId:this.config.clientUniqueId,bookingLineItems:i,depositPayment:{value:Number(this.getDepositPaymentOptions()[this.apntlyBookingModalData.selectedDepositPaymentOption].value),type:Number(this.getDepositPaymentOptions()[this.apntlyBookingModalData.selectedDepositPaymentOption].type)}})});if(200===n.status){let t=yield n.json();window.location.href=t.checkout.url}else console.error("Error getting Checkout Url from Server")}))}}e.AppointlyBookingClient=r;let l=new r;e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AppointlyDepositPaymentType=e.AppointlyDepositLogsEvent=e.AppointlyFloatWidgetAction=e.AppointlySlotTimeFormat=e.AppointlyQuestionType=e.AppointlyLocationType=e.AppointlyWeekDay=e.ServiceAppointmentLevel=void 0,function(t){t[t.Product=1]="Product",t[t.Variant=2]="Variant"}(e.ServiceAppointmentLevel||(e.ServiceAppointmentLevel={})),function(t){t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday",t[t.Sunday=7]="Sunday"}(e.AppointlyWeekDay||(e.AppointlyWeekDay={})),function(t){t[t.None=1]="None",t[t.Address=2]="Address",t[t.GoogleMeet=3]="GoogleMeet",t[t.Zoom=4]="Zoom"}(e.AppointlyLocationType||(e.AppointlyLocationType={})),function(t){t[t.Text=1]="Text",t[t.Radio=2]="Radio",t[t.Select=3]="Select"}(e.AppointlyQuestionType||(e.AppointlyQuestionType={})),function(t){t[t.TwelveHour=1]="TwelveHour",t[t.TwentyFourHour=2]="TwentyFourHour"}(e.AppointlySlotTimeFormat||(e.AppointlySlotTimeFormat={})),function(t){t[t.OpenUrl=1]="OpenUrl",t[t.OpenService=2]="OpenService"}(e.AppointlyFloatWidgetAction||(e.AppointlyFloatWidgetAction={})),function(t){t[t.DepositCreated=1]="DepositCreated",t[t.OrderPaid=2]="OrderPaid",t[t.InvoiceSent=3]="InvoiceSent"}(e.AppointlyDepositLogsEvent||(e.AppointlyDepositLogsEvent={})),function(t){t[t.Percentage=1]="Percentage",t[t.Fixed=2]="Fixed"}(e.AppointlyDepositPaymentType||(e.AppointlyDepositPaymentType={}))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AppointlyGroupProcessData=void 0;e.AppointlyGroupProcessData=class{static isJointGroupAvailability(t){return["H5YUY8MNP5NCDT8LDUS52PRQ","LAC78BMNVEDHZRZSWWWT9NTG","YBTZURJUDSTFW7YUTYG2Z3RE","C2X4HAH18SAL8PDHXX76CHNM","4WHEY8LXSV8BF46WZNUJ25MR","LR7F7B6GQBCSGS5JVBY93CJU"].some(e=>t===e)}}},function(t,e,i){var o=i(4),n=i(5);t.exports=function(t,e){return n(o,t,e)}},function(t,e){var i=self.crypto||self.msCrypto;t.exports=function(t){return i.getRandomValues(new Uint8Array(t))}},function(t,e){t.exports=function(t,e,i){for(var o=(2<<Math.log(e.length-1)/Math.LN2)-1,n=Math.ceil(1.6*o*i/e.length),a="";;)for(var s=t(n),r=0;r<n;r++){var l=s[r]&o;if(e[l]&&(a+=e[l]).length===i)return a}}}]);
//# sourceMappingURL=appointlyBookingClient.min.js.map
    window.appointlyClient = AppointlyBookingClient.default;
    window.appointlyConfig = appointlyConfig;
    appointlyClient.init(window.appointlyConfig);
  } else {
    console.log("Appointly Client Already Added, Skipping")
  }
}
