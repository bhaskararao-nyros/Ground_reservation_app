<template>
  <div class="hello">
    <HeaderComponent />
<!--  header end -->
<!-- side menu start -->
    <SidebarComponent />
<!-- side menu end -->

<!-- content start -->
    <div class="tot_cntnt">
      <div class="container">
      <div class="row">
      <div class="col-md-9">
        <div class="tot_clndr_blk">
              
          <div class="week_slct">
          <select>
            <option>Week</option>
            <option>Month</option>
            <option>Year</option>
          </select>
          </div>
                
          <div class="clndr_prv">
          <ul>
            <li><a href="#" class="glyphicon glyphicon-menu-left"></a></li>
            <li><a href="#" class="glyphicon glyphicon-menu-right"></a></li>
          </ul>
          </div>
          <div class="month_title"><h4>June 2018</h4></div>
          <button type="button" class="btn btn-primary btn-lg add_slot_btn" data-toggle="modal" data-target="#addSlot">Add Slot</button>
          <div class="clr"></div>
          <button type="button" class="btn btn-primary btn-lg avilbl_slt_btn" data-toggle="modal" data-target="#availableSlot">Available Slot</button>
          <button type="button" class="btn btn-primary btn-lg rsrvd_slt_btn" data-toggle="modal" data-target="#reservedSlot">Reserved Slot</button>
          <button type="button" class="btn btn-primary btn-lg rsrvton_slt_btn" data-toggle="modal" data-target="#reservationSlot">Reservation Requests</button>
          <button type="button" class="btn btn-primary btn-lg edit_slot_btn" data-toggle="modal" data-target="#editSlot">Edit Slot</button>
          <button type="button" class="btn btn-primary btn-lg cncl_slot_btn" data-toggle="modal" data-target="#cancelSlot">Cancel Slot</button>
          <div class="clr">&nbsp;</div>
          <button type="button" class="btn btn-primary btn-lg cnfrm_pop_btn" data-toggle="modal" data-target="#confirmPop">Confirm</button>
          <button type="button" class="btn btn-primary btn-lg asgn_slt_btn" data-toggle="modal" data-target="#assignPop">Assign Slot</button>
          <div class="clr"></div>


          <div class="clndr_blk">
            <full-calendar @event-selected="slotSelected" :events="events" />
          </div>
          
        </div>
      </div>
      <div class="col-md-3">
      <div class="rgt_park">
      <form class="rgt_park_frm">
        <div class="park_slct">
        <select>
          <option>Park name</option>
          <option>Park name one</option>
          <option>Park name two</option>
          <option>Park name three</option>
        </select>
        </div>

        <div class="park_slct">
        <select>
          <option>Ground name</option>
          <option>Ground name one</option>
          <option>Ground name two</option>
          <option>Ground name three</option>
        </select>
        </div>

        <div class="park_slct">
        <select>
          <option>Sport name</option>
          <option>Sport name one</option>
          <option>Sport name two</option>
          <option>Sport name three</option>
        </select>
        </div>
      </form>
      <div class="park_pie">
        <GChart
          type="PieChart"
          :data="chartData"
          :options="chartOptions"
        />
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
    <!-- content end -->
    <!-- add slot modal start -->
        <div class="modal fade add_slot_modal" id="addSlot" tabindex="-1" role="dialog" aria-labelledby="addSlotLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="addSlotLabel">Add Slot</h4>
              </div>
              <div class="modal-body">
            <div class="add_slot_tabs">

            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Single Slot</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Slot Schedule</a></li>
            </ul>
            <div class="clr">&nbsp;</div>
            <hr class="tab_brder" />
            

            <!-- Tab panes -->
            <div class="tab-content add_slot_cntnt">
              <div role="tabpanel" class="tab-pane active" id="home">
                <div class="single_slot">
                  <form>
                  <div class="row">
                  <div class="col-md-12">
                    <div class="grnd_slct">
                    <select v-model="slot.gr_name">
                      <option value="select">Select</option>
                      <option v-for="ground in grounds" :value="ground.name">{{ ground.name }}</option>
                    </select>
                    </div>
                  </div>
                  </div>
                    <div class="row">
                    <div class="col-md-12">
                    <div class="form-group has-feedback">
                    <input type="date" class="form-control" v-model="slot.start_date" placeholder="Start Date">
                    <span class="glyphicon glyphicon-calendar form-control-feedback input_icon" aria-hidden="true"></span>
                    </div>
                    </div>

                    </div>
                    <div class="row">
                    <div class="col-md-6">
                    <div class="form-group has-feedback">
                    <input type="time" class="form-control" v-model="slot.from_time" placeholder="From Time">
                    <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                    </div>
                    </div>

                    <div class="col-md-6">
                    <div class="form-group has-feedback">
                    <input type="time" class="form-control" v-model="slot.to_time" placeholder="To Time">
                    <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                    </div>
                    </div>
                    </div>
                    <div class="form_btns">
                      <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_single_slot_modal">
                        <img src="../assets/img/cancel_icon.png" />
                      </button>
                      <button type="button" class="btn btn-primary save_btn" @click="addSingleSlot">
                        <img src="../assets/img/save_icon.png" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            <div role="tabpanel" class="tab-pane" id="profile">
            <div class="single_slot">
              <form>
              <div class="row">
              <div class="col-md-12">
                <div class="grnd_slct">
                <select v-model="slot_sc.gr_name">
                  <option value="select">Select</option>
                  <option v-for="ground in grounds" :value="ground.name">{{ ground.name }}</option>
                </select>
                </div>
              </div>
              </div>
                <div class="row">
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="date" class="form-control" v-model="slot_sc.start_date" placeholder="Start Date">
                <span class="glyphicon glyphicon-calendar form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="date" class="form-control" v-model="slot_sc.end_date" placeholder="End Date">
                <span class="glyphicon glyphicon-calendar form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>

                </div>
                <div class="row">
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="time" class="form-control" v-model="slot_sc.from_time" placeholder="From Time">
                <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>

                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="time" class="form-control" v-model="slot_sc.to_time" placeholder="To Time">
                <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>
                </div>
                <div class="row">
                  <div class="week_check">
                  <ul class="week_chck_box">
                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check1"  v-model="slot_sc.week_days" name="check" value="Mon">
                  <label for="check1"></label>
                  </div>
                  <span>Mon</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check2"  v-model="slot_sc.week_days" name="check" value="Tue">
                  <label for="check2"></label>
                  </div>
                  <span>Tue</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check3"  v-model="slot_sc.week_days" name="check" value="Wed">
                  <label for="check3"></label>
                  </div>
                  <span>Wed</span> 
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check4"  v-model="slot_sc.week_days" name="check" value="Thu">
                  <label for="check4"></label>
                  </div>
                  <span>Thu</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check5"  v-model="slot_sc.week_days" name="check" value="Fri"><!-- checked -->
                  <label for="check5"></label>
                  </div>
                  <span>Fri</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check6"  v-model="slot_sc.week_days" name="check" value="Sat"><!-- checked -->
                  <label for="check6"></label>
                  </div>
                  <span>Sat</span>
                  </li>

                  </ul>
                  </div>
                </div>
                <div class="form_btns">
                  <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_slot_sc_modal">
                    <img src="../assets/img/cancel_icon.png" />
                  </button>
                  <button type="button" class="btn btn-primary save_btn" @click="addSlotSchedule">
                    <img src="../assets/img/save_icon.png" />
                  </button>
                </div>
              </form>
            </div>
            </div>
            </div>

            </div>
              </div>
            </div>
          </div>
        </div>
        <!-- add slot modal end -->

        <button type="button" ref="edit_slot_btn" class="hide btn btn-primary btn-lg add_slot_btn" data-toggle="modal" data-target="#editSlot">Edit Slot</button>

        <!-- edit slot modal start -->
        <div class="modal fade add_slot_modal" id="editSlot" tabindex="-1" role="dialog" aria-labelledby="addSlotLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="addSlotLabel">Edit Slot</h4>
              </div>
              <div class="modal-body">
            <div class="add_slot_tabs">

            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#edit_home" aria-controls="home" role="tab" data-toggle="tab">Single Slot</a></li>
            <li role="presentation"><a href="#edit_profile" aria-controls="profile" role="tab" data-toggle="tab">Slot Schedule</a></li>
            </ul>
            <div class="clr">&nbsp;</div>
            <hr class="tab_brder" />
            

            <!-- Tab panes -->
            <div class="tab-content add_slot_cntnt">
              <div role="tabpanel" class="tab-pane active" id="edit_home">
                <div class="single_slot">
                  <form>
                  <div class="row">
                  <div class="col-md-12">
                    <div class="grnd_slct">
                    <select v-model="slot.gr_name">
                      <option value="select">Select</option>
                      <option v-for="ground in grounds" :value="ground.name">{{ ground.name }}</option>
                    </select>
                    </div>
                  </div>
                  </div>
                    <div class="row">
                    <div class="col-md-12">
                    <div class="form-group has-feedback">
                    <input type="date" class="form-control" v-model="slot.start_date" placeholder="Start Date">
                    <span class="glyphicon glyphicon-calendar form-control-feedback input_icon" aria-hidden="true"></span>
                    </div>
                    </div>

                    </div>
                    <div class="row">
                    <div class="col-md-6">
                    <div class="form-group has-feedback">
                    <input type="time" class="form-control" v-model="slot.from_time" placeholder="From Time">
                    <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                    </div>
                    </div>

                    <div class="col-md-6">
                    <div class="form-group has-feedback">
                    <input type="time" class="form-control" v-model="slot.to_time" placeholder="To Time">
                    <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                    </div>
                    </div>
                    </div>
                    <div class="form_btns">
                      <button type="button" class="btn btn-default delete_btn" data-dismiss="modal" @click="cancelSingleSlot">
                        <img src="../assets/img/delete_icon.png" />
                      </button>
                      <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="edit_single_slot_modal">
                        <img src="../assets/img/cancel_icon.png" />
                      </button>
                      <button type="button" class="btn btn-primary save_btn" @click="updateSingleSlot">
                        <img src="../assets/img/save_icon.png" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            <div role="tabpanel" class="tab-pane" id="edit_profile">
            <div class="single_slot">
              <form>
              <div class="row">
              <div class="col-md-12">
                <div class="grnd_slct">
                <select v-model="slot_sc.gr_name">
                  <option value="select">Select</option>
                  <option v-for="ground in grounds" :value="ground.name">{{ ground.name }}</option>
                </select>
                </div>
              </div>
              </div>
                <div class="row">
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="date" class="form-control" v-model="slot_sc.start_date" placeholder="Start Date">
                <span class="glyphicon glyphicon-calendar form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="date" class="form-control" v-model="slot_sc.end_date" placeholder="End Date">
                <span class="glyphicon glyphicon-calendar form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>

                </div>
                <div class="row">
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="time" class="form-control" v-model="slot_sc.from_time" placeholder="From Time">
                <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>

                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="time" class="form-control" v-model="slot_sc.to_time" placeholder="To Time">
                <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>
                </div>
                <div class="row">
                  <div class="week_check">
                  <ul class="week_chck_box">
                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check1"  v-model="slot_sc.week_days" name="check" value="Mon">
                  <label for="check1"></label>
                  </div>
                  <span>Mon</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check2"  v-model="slot_sc.week_days" name="check" value="Tue">
                  <label for="check2"></label>
                  </div>
                  <span>Tue</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check3"  v-model="slot_sc.week_days" name="check" value="Wed">
                  <label for="check3"></label>
                  </div>
                  <span>Wed</span> 
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check4"  v-model="slot_sc.week_days" name="check" value="Thu">
                  <label for="check4"></label>
                  </div>
                  <span>Thu</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check5"  v-model="slot_sc.week_days" name="check" value="Fri"><!-- checked -->
                  <label for="check5"></label>
                  </div>
                  <span>Fri</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check6"  v-model="slot_sc.week_days" name="check" value="Sat"><!-- checked -->
                  <label for="check6"></label>
                  </div>
                  <span>Sat</span>
                  </li>

                  </ul>
                  </div>
                </div>
                <div class="form_btns">
                  <button type="button" class="btn btn-default delete_btn" data-dismiss="modal" @click="cancelSlotSchedule">
                    <img src="../assets/img/delete_icon.png" />
                  </button>
                  <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="edit_slot_sche_modal">
                    <img src="../assets/img/cancel_icon.png" />
                  </button>
                  <button type="button" class="btn btn-primary save_btn" @click="updateSlotSchedule">
                    <img src="../assets/img/save_icon.png" />
                  </button>
                </div>
              </form>
            </div>
            </div>
            </div>

            </div>
              </div>
            </div>
          </div>
        </div>
        <!-- edit slot modal end -->

        <!-- availble slot modal start -->
      
        <div class="modal fade avilbl_slt_modal bs-example-modal-sm" id="availableSlot" tabindex="-1" role="dialog" aria-labelledby="availableSlot">
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="availableSlot">Available Slot</h4>
              </div>
              <div class="modal-body">
                <div class="avilbl_slt_dtls">
                <dl class="dl-horizontal">
                <dt>Ground :</dt>
                <dd>Bakers field</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Date :</dt>
                <dd>19-06-2018</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>From Time :</dt>
                <dd>06:00 PM</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>To Time :</dt>
                <dd>08:00 PM</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Sport :</dt>
                <dd>Cricket</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Representative :</dt>
                <dd>Shive Chaganti</dd>
                </dl>
           
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal">
                  <img src="../assets/img/cancel_icon.png" />
                </button>
                <button type="button" class="btn btn-primary save_btn">
                  <img src="../assets/img/save_icon.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- availble slot modal end -->


        <!-- reserved slot modal start -->
      
        <div class="modal fade rsrvd_slt_modal bs-example-modal-sm" id="reservedSlot" tabindex="-1" role="dialog" aria-labelledby="reservedSlot">
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="reservedSlot">Reserved</h4>
              </div>
              <div class="modal-body">
                <div class="avilbl_slt_dtls">
                <dl class="dl-horizontal">
                <dt>Holder :</dt>
                <dd>Rohit Karuturi<br />
                658-111-1111<br />
                r@r.com</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Date :</dt>
                <dd>19-06-2018</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>From Time :</dt>
                <dd>06:00 PM</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>To Time :</dt>
                <dd>08:00 PM</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Sport :</dt>
                <dd>Cricket</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Representative :</dt>
                <dd>Shive Chaganti</dd>
                </dl>
           
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal">
                  <img src="../assets/img/cancel_icon.png" />
                </button>
                <button type="button" class="btn btn-default reset_btn" data-dismiss="modal">
                  <img src="../assets/img/reset_icon.png" />
                </button>
                <button type="button" class="btn btn-default delete_btn" data-dismiss="modal">
                  <img src="../assets/img/delete_icon.png" />
                </button>
                <button type="button" class="btn btn-primary edit_btn">
                  <img src="../assets/img/edit_icon.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- reserved slot modal end -->

        <!-- Reservation slot modal start -->
      
        <div class="modal fade rsrvton_slt_modal bs-example-modal-sm" id="reservationSlot" tabindex="-1" role="dialog" aria-labelledby="reservationSlot">
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="reservationSlot">Reservation Requests</h4>
              </div>
              <div class="modal-body">
                <div class="avilbl_slt_dtls">
                <dl class="dl-horizontal">
                <dt>Ground : </dt>
                <dd>Bakers field</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Date :</dt>
                <dd>19-06-2018</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>From Time :</dt>
                <dd>06:00 PM</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>To Time :</dt>
                <dd>08:00 PM</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Sport :</dt>
                <dd>Cricket</dd>
                </dl>

                <dl class="dl-horizontal">
                <dt>Representative :</dt>
                <dd>Shive Chaganti</dd>
                </dl>
           
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal">
                  <img src="../assets/img/cancel_icon.png" />
                </button>
                <button type="button" class="btn btn-default delete_btn" data-dismiss="modal">
                  <img src="../assets/img/delete_icon.png" />
                </button>
                <button type="button" class="btn btn-default reenter_btn" data-dismiss="modal">
                  <img src="../assets/img/reenter_icon.png" />
                </button>
                <button type="button" class="btn btn-primary edit_btn">
                  <img src="../assets/img/edit_icon.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- reserved slot modal end -->

        <!-- cancel slot modal start -->
        <div class="modal fade cncl_slot_modal" id="cancelSlot" tabindex="-1" role="dialog" aria-labelledby="cancelSlotLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="cancelSlotLabel">Cancelled Slot</h4>
              </div>
              <form>
              <div class="modal-body">
              <div class="cncl_slot_cntnt">
              
              <div class="row">
              <div class="col-md-12">
                <div class="grnd_slct">
                <select>
                <option>Ground Name</option>
                <option>Ground Name one</option>
                <option>Ground Name two</option>
                <option>Ground Name three</option>
                </select>
                </div>
              </div>
              </div>
                <div class="row">
                <div class="col-md-12">
                <div class="form-group has-feedback">
                <input type="text" class="form-control" placeholder="Start Date">
                <span class="glyphicon glyphicon-calendar form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>

                </div>
                <div class="row">
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="text" class="form-control" placeholder="From Time">
                <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>

                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="text" class="form-control" placeholder="To Time">
                <span class="glyphicon glyphicon-time form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>
                </div>
                <div class="row">
              <div class="col-md-12">
                <div class="grnd_slct">
                <select>
                <option>Cricket</option>
                <option>Cricket one</option>
                <option>Cricket two</option>
                <option>Cricket three</option>
                </select>
                </div>
              </div>
              </div>
              
            </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default delete_btn" data-dismiss="modal">
                  <img src="../assets/img/delete_icon.png" />
                </button>
                <button type="button" class="btn btn-primary save_btn">
                  <img src="../assets/img/reuse_icon.png" />
                </button>
              </div>
                </form>
              </div>
            </div>
          </div>
        <!-- cancel slot modal end -->

        <!-- Reservation slot modal start -->
        <div class="modal fade cnfrm_pop_modal bs-example-modal-sm" id="confirmPop" tabindex="-1" role="dialog" aria-labelledby="confirmPop">
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="confirmPopLabel">Confirm</h4>
              </div>
              <div class="modal-body">
                <div class="avilbl_slt_dtls">
                    <h6>Are you sure? Send notification to users?</h6>       
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal">
                  <img src="../assets/img/cancel_icon.png" />
                </button>
                <button type="button" class="btn btn-primary save_btn">
                  <img src="../assets/img/save_icon.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Reservation slot modal end -->

        <!-- Assign Slot modal start -->
        <div class="modal fade asgn_slt_modal bs-example-modal-sm" id="assignPop" tabindex="-1" role="dialog" aria-labelledby="assignPop">
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="assignPopLabel">Assign Slot</h4>
              </div>
              <div class="modal-body">
                <div class="asgn_slt_cntnt">
                  <div class="asgn_slt_dtls">
                    <ul>
                      <li>18-06-2018</li>
                      <li>06:00 PM</li>
                      <li>08:00 PM</li>
                    </ul>
                  </div>


                  <div class="asgn_slts">
                    <!-- assign slots block start -->
                    <div class="asgn_slt_blk">
                      <div class="name_sign">SC</div>
                      <div class="asgn_prsn_dtls">
                        <p>Shiva Chaganti</p>
                        <p>682-111-1122</p>
                        <p>name@r.com</p>
                      </div>
                      <div class="asgn_prsn_slct">
                  <input type="radio" id="radio1" name="radio" value="false">
                  <label for="radio1"></label>
                      </div>

                    </div>
                    <!-- assign slots block start -->
                    <!-- assign slots block start -->
                    <div class="asgn_slt_blk">
                      <div class="name_sign gry_name_sign">KK</div>
                      <div class="asgn_prsn_dtls">
                        <p>Shiva Chaganti</p>
                        <p>682-111-1122</p>
                        <p>name@r.com</p>
                      </div>
                      <div class="asgn_prsn_slct">
                  <input type="radio" id="radio2" name="radio" value="false">
                  <label for="radio2"></label>
                      </div>

                    </div>
                    <!-- assign slots block start -->
                    <!-- assign slots block start -->
                    <div class="asgn_slt_blk">
                      <div class="name_sign">SC</div>
                      <div class="asgn_prsn_dtls">
                        <p>Shiva Chaganti</p>
                        <p>682-111-1122</p>
                        <p>name@r.com</p>
                      </div>
                      <div class="asgn_prsn_slct">
                  <input type="radio" id="radio3" name="radio" value="false">
                  <label for="radio3"></label>
                      </div>

                    </div>
                    <!-- assign slots block start -->
                    <!-- assign slots block start -->
                    <div class="asgn_slt_blk">
                      <div class="name_sign">SC</div>
                      <div class="asgn_prsn_dtls">
                        <p>Shiva Chaganti</p>
                        <p>682-111-1122</p>
                        <p>name@r.com</p>
                      </div>
                      <div class="asgn_prsn_slct">
                  <input type="radio" id="radio4" name="radio" value="false">
                  <label for="radio4"></label>
                      </div>

                    </div>
                    <!-- assign slots block start -->
                    <!-- assign slots block start -->
                    <div class="asgn_slt_blk">
                      <div class="name_sign">SC</div>
                      <div class="asgn_prsn_dtls">
                        <p>Shiva Chaganti</p>
                        <p>682-111-1122</p>
                        <p>name@r.com</p>
                      </div>
                      <div class="asgn_prsn_slct">
                  <input type="radio" id="radio5" name="radio" value="false">
                  <label for="radio5"></label>
                      </div>

                    </div>
                    <!-- assign slots block start -->
                    <!-- assign slots block start -->
                    <div class="asgn_slt_blk">
                      <div class="name_sign">SC</div>
                      <div class="asgn_prsn_dtls">
                        <p>Shiva Chaganti</p>
                        <p>682-111-1122</p>
                        <p>name@r.com</p>
                      </div>
                      <div class="asgn_prsn_slct">
                  <input type="radio" id="radio6" name="radio" value="false">
                  <label for="radio6"></label>
                      </div>

                    </div>
                    <!-- assign slots block start -->
                  </div>



                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default asgn_btns fifo_btn" data-dismiss="modal">Fifo</button>
                <button type="button" class="btn btn-default asgn_btns random_btn" data-dismiss="modal">Random</button>
                <button type="button" class="btn btn-default asgn_btns confirm_btn" data-dismiss="modal">Confirm</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Assign Slot modal end -->


       
    
  </div>
</template>
<script>

import HeaderComponent from '@/components/Header'
import SidebarComponent from '@/components/Sidebar'
import AppService from '@/services/AppService'

var moment = require('moment');

var cal_events = [
  {
    title  : 'Ground 2',
    start  : '2018-08-30T4:30:00',
    end  : '2018-08-30T6:30:00',
    color : 'grey'
  },
  {
    title  : 'Ground 1',
    start  : '2018-08-29T01:30:00',
    end    : '2018-08-29T04:30:00',
    color : 'green'
  },
  {
    title  : 'Ground 3',
    start  : '2018-08-28T03:30:00',
    end    : '2018-08-28T07:30:00',
    color : 'blue'
  }
];

export default {
  data() {
    return {
      events: cal_events,
      grounds:[],
      slot:{ gr_name: 'select', start_date:'', end_date:'', to_time:'', from_time:'', color:'green' },
      slot_sc:{ gr_name: 'select', start_date:'', to_time:'', from_time:'', week_days:[], color:'green' },
      edited_slot_id:'',
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['Reserved', 1000, 400, 200],
        ['Requested', 1170, 460, 250],
        ['Available', 660, 1120, 300],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  },
  name: 'HelloWorld',
  moment: moment,
  props: {
  },
  methods: {
    async getGrounds () {
      const res = await AppService.getGrounds()
      console.log('grounds @@@', res.data)
      this.grounds = res.data.data
    },
    async getAvailableSlots () {
      const res = await AppService.getAvailableSlots()
      console.log('availble slots @@@', res.data)
      let availble_slots = res.data.data
      if (availble_slots.length > 0) {
        this.refreshEvents(availble_slots)
      } 
    },
    async addSingleSlot () {
      const res = await AppService.addSingleSlot(this.slot)
      console.log('Single Slot @@@', res.data)
      this.refreshEvents(res.data.data)
      this.$refs.close_single_slot_modal.click()
      this.assignTimeDateOnload()
    },
    async addSlotSchedule () {
      const res = await AppService.addSlotSchedule(this.slot_sc)
      console.log('Slot Schedule @@@', res.data)
      this.refreshEvents(res.data.data)
      this.$refs.close_slot_sc_modal.click()
      this.assignTimeDateOnload()
    },
    timeNow (param) {
      if (param === undefined) {
        var d = new Date(),
          h = (d.getHours()<10?'0':'') + d.getHours(),
          m = (d.getMinutes()<10?'0':'') + d.getMinutes();
        var value = h + ':' + m;
        return value;
      }      
    },
    dateNow (param) {
      if (param === undefined) {
        var now = new Date(),
        day = ("0" + now.getDate()).slice(-2),
        month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear()+"-"+(month)+"-"+(day)
        return today;
      }      
    },
    assignTimeDateOnload () {
      let time = this.timeNow()
      this.slot.to_time = time
      this.slot.from_time = time
      this.slot.start_date = this.dateNow()
      this.slot_sc.to_time = time
      this.slot_sc.from_time = time
      this.slot_sc.start_date = this.dateNow()
      this.slot_sc.end_date = this.dateNow()
    },
    refreshEvents (availble_slots) {
      if (availble_slots.length > 0) {
        for (var i = 0; i < availble_slots.length; i++) {
          let start_date, end_date;
            start_date = availble_slots[i].start_date +'T'+ availble_slots[i].from_time+':00'
            end_date = availble_slots[i].end_date === '' ? availble_slots[i].start_date +'T'+ availble_slots[i].to_time+':00' : availble_slots[i].end_date +'T'+ availble_slots[i].to_time+':00'
          let obj = {
            title: availble_slots[i].gr_name,
            start: start_date, 
            resourceId:availble_slots[i]._id,
            end : end_date,
            color:availble_slots[i].color
          }
          this.events.push(obj)
        }
      } else {
        let start_date, end_date;
            start_date = availble_slots.start_date +'T'+ availble_slots.from_time+':00'
            end_date = availble_slots.end_date === '' ? availble_slots.start_date +'T'+ availble_slots.to_time+':00' : availble_slots.end_date +'T'+ availble_slots.to_time+':00'
        let obj = {
          title: availble_slots.gr_name,
          start: start_date, 
          resourceId:availble_slots._id,
          end : end_date,
          color:availble_slots.color
        }
        this.events.push(obj)
      }
      
    },
    slotSelected (event) {
      console.log('selected event @@@@@', event);
      let slot = event;

      this.edited_slot_id = slot.resourceId
      this.slot.gr_name = slot.title
      this.slot.start_date = moment(slot.start).format('YYYY-MM-DD')
      this.slot.from_time = moment(slot.start).format('HH:mm')
      this.slot.to_time = moment(slot.end).format('HH:mm')
      this.slot_sc.gr_name = slot.title
      this.slot_sc.start_date = moment(slot.start).format('YYYY-MM-DD')
      this.slot_sc.end_date = moment(slot.end).format('YYYY-MM-DD')
      this.slot_sc.from_time = moment(slot.start).format('HH:mm')
      this.slot_sc.to_time = moment(slot.end).format('HH:mm')

      this.$refs.edit_slot_btn.click()
    },
    async updateSingleSlot () {
      this.slot._id = this.edited_slot_id
      console.log('updated slot @@@@@', this.slot)
      const res = await AppService.updateSingleSlot(this.slot)
      console.log('Single Slot @@@', res.data)
      this.$refs.edit_single_slot_modal.click()
      this.events = []
      this.refreshEvents(res.data.data)
    },
    async updateSlotSchedule () {
      this.slot_sc._id = this.edited_slot_id
      console.log('updated slot @@@@@', this.slot_sc)
      const res = await AppService.updateSlotSchedule(this.slot_sc)
      console.log('Slot Schedule @@@', res.data)
      this.$refs.edit_slot_sche_modal.click()
      this.events = []
      this.refreshEvents(res.data.data)
    },
    async cancelSlotSchedule () {
      let data = { _id: this.edited_slot_id }
      const res = await AppService.cancelSlotSchedule(data)
      console.log('cancel slot schedule @@@@', res.data)
      this.events = []
      this.refreshEvents(res.data.data)
    },
    async cancelSingleSlot () {
      let data = { _id: this.edited_slot_id }
      const res = await AppService.cancelSingleSlot(data)
      console.log('cancel single slot @@@@', res.data)
      this.events = []
      this.refreshEvents(res.data.data)
    }
  },
  mounted () {
    this.getGrounds()
    this.getAvailableSlots()
    this.assignTimeDateOnload()
  },
  components: {
    HeaderComponent,
    SidebarComponent
  }
}
</script>
<style scoped>
.form_btns {
  float: right;
  margin-bottom: 3%;
}
</style>
