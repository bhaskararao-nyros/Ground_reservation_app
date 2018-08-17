<template>
  <div class="hello">
    <header class="filds_hdr">
      <nav class="navbar navbar-default">
        <div class="container">
        <!-- logo start -->
          <div class="navbar-header">
          <span class="togle_icon" id="menu" onclick="toggleMenu()"><img src="../assets/img/toggle_icon.png"> </span>
            <a class="navbar-brand brnd_logo" href="#"><img src="../assets/img/logo.png" /></a>
          </div>
          <!-- logo end -->
          <!-- page title start -->
          <h3 class="pag_title">Town of Flower Mound - Fields Manager</h3>
          <!-- page title end -->
          <!-- profile dropdown start -->
          <div class="dropdown prf_drp">
            <button class="btn btn-default dropdown-toggle prf_drp_btn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i>J</i>
          <!-- <span class="caret"></span> -->
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Option One</a></li>
              <li><a href="#">Option Two</a></li>
              <li><a href="#">Option Three</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
      <!-- profile dropdown end -->
        </div>
      </nav>
    </header>
<!--  header end -->
<!-- side menu start -->
    <div class="side_nav" id="menu-box">
      <ul>
        <li class="active"><a href="index.html">
          <img class="nav_normal" src="../assets/img/forma_icon.png" />
          <img class="nav_active" src="../assets/img/forma_active_icon.png" />
          <span>Slots</span>
        </a></li>
        <li><a href="grounds.html">
          <img class="nav_normal" src="../assets/img/nav_two_icon.png" />
          <img class="nav_active" src="../assets/img/nav_two_active_icon.png" />
          <span>Grounds</span>
        </a></li>
        <li><a href="admins_view.html">
          <img class="nav_normal" src="../assets/img/user_icon.png" />
          <img class="nav_active" src="../assets/img/user_active_icon.png" />
          <span>Admin</span>
        </a></li>
        <li><a href="parks_list.html">
          <img class="nav_normal" src="../assets/img/park_icon.png" />
          <img class="nav_active" src="../assets/img/park_active_icon.png" />
          <span>Parks List</span>
        </a></li>
      </ul>
    </div>
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
            <img src="../assets/img/calendar.png" />
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
        <img src="../assets/img/park_pie.png" />
        <ul>
          <li class="reserved_blk">
            <i></i>
            <span>Reserved</span>
          </li>
          <li class="available_blk">
            <i></i>
            <span>Available</span>
          </li>
          <li class="requested_blk">
            <i></i>
            <span>Requested</span>
          </li>
        </ul>
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
                <select disabled class="disabled_slct">
                <option>Bakers Field</option>
                <option>Bakers Field one</option>
                <option>Bakers Field two</option>
                <option>Bakers Field three</option>
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
              </form>
            </div>


            </div>

            <div role="tabpanel" class="tab-pane" id="profile">
            <div class="single_slot">
              <form>
              <div class="row">
              <div class="col-md-12">
                <div class="grnd_slct">
                <select disabled class="disabled_slct">
                <option>Bakers Field</option>
                <option>Bakers Field one</option>
                <option>Bakers Field two</option>
                <option>Bakers Field three</option>
                </select>
                </div>
              </div>
              </div>
                <div class="row">
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="text" class="form-control" placeholder="Start Date">
                <span class="glyphicon glyphicon-calendar form-control-feedback input_icon" aria-hidden="true"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group has-feedback">
                <input type="text" class="form-control" placeholder="End Date">
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
                  <div class="week_check">
                  <ul class="week_chck_box">
                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check1" name="check" value="false">
                  <label for="check1"></label>
                  </div>
                  <span>Mon</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check2" name="check" value="false">
                  <label for="check2"></label>
                  </div>
                  <span>Tue</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check3" name="check" value="false">
                  <label for="check3"></label>
                  </div>
                  <span>Wed</span> 
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check4" name="check" value="false">
                  <label for="check4"></label>
                  </div>
                  <span>Thu</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check5" name="check" value="false"><!-- checked -->
                  <label for="check5"></label>
                  </div>
                  <span>Fri</span>
                  </li>

                  <li>
                  <div class="check_div">
                  <input type="checkbox" id="check6" name="check" value="false"><!-- checked -->
                  <label for="check6"></label>
                  </div>
                  <span>Sat</span>
                  </li>

                  </ul>
                  </div>
                </div>
              </form>
            </div>
            </div>
            </div>

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
        <!-- add slot modal end -->
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

        <!-- edit slot modal start -->
        <div class="modal fade edit_slot_modal" id="editSlot" tabindex="-1" role="dialog" aria-labelledby="editSlotLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <img src="../assets/img/close_icon.png" />
                </button>
                <h4 class="modal-title" id="editSlotLabel">Edit Slot</h4>
              </div>
              <form>
              <div class="modal-body">
              <div class="edit_slot_cntnt">
              
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
                <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal">
                  <img src="../assets/img/cancel_icon.png" />
                </button>
                <button type="button" class="btn btn-primary save_btn">
                  <img src="../assets/img/save_icon.png" />
                </button>
              </div>
                </form>
              </div>
            </div>
          </div>
        <!-- edit slot modal end -->

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

export default {
  name: 'HelloWorld',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
