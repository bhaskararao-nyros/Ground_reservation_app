<template>
	<div>
	<HeaderComponent />
	<SidebarComponent />
<!-- content start -->
<div class="tot_cntnt">
	<div class="container">
	<button type="button" class="btn btn-primary btn-lg cnfrm_pop_btn" data-toggle="modal" data-target="#confirmPop">Confirm</button>
	<!-- grounds section start -->
	<div class="grunds_sctn">
	<!-- grounds list header start -->
		<div class="grunds_hdr row">
			<div class="col-md-5 col-xs-4"><h2>Ground</h2></div>
			<div class="col-md-5 col-xs-5"><h2>Sports</h2></div>
		</div>
		<!-- grounds list header end -->
		
		<!-- grounds list start -->
		<div class="grunds_lst row">
			<!-- grounds list name start -->
			<div class="col-md-5 col-xs-4"><h3>Bakers Field</h3></div>
			<!-- grounds list name end -->

			<!-- grounds list sports start -->
			<div class="col-md-5 col-xs-5">

				<!-- grounds sports pills start -->
				<div class="sprts_pills">
					<ul>
						<li>Cricket <span class="cls_pill"><img src="../assets/img/close_icon.png" /></span></li>
						<li>Tennis <span class="cls_pill"><img src="../assets/img/close_icon.png" /></span></li>
						<li>Socker <span class="cls_pill"><img src="../assets/img/close_icon.png" /></span></li>
					</ul>
				</div>
				<!-- grounds sports pills end -->

				<!-- grounds more sports pills start -->
				<a data-toggle="popover" data-container="body" data-placement="right" type="button" data-html="true" href="#" id="login" class="more_sprts glyphicon glyphicon-option-horizontal"></a>
				<!-- grounds more sports pills end -->

				<!-- grounds more sports popover pills start -->
				<div id="popover-content-login" class="hide">
					<div class="sprts_pills pop_over_pills">
						<ul>
							<li>Cricket <span class="cls_pill"><img src="../assets/img/close_icon.png" /></span></li>
							<li>Tennis <span class="cls_pill"><img src="../assets/img/close_icon.png" /></span></li>
							<li>Socker <span class="cls_pill"><img src="../assets/img/close_icon.png" /></span></li>
						</ul>
					</div>
				</div>
				<!-- grounds more sports popover pills end -->
				

			</div>
			<!-- grounds list sports end -->

			<div class="col-md-2 col-xs-3">
			<div class="lst_actns">
				<!-- delete icon start -->
				<a href="#" class="lst_dlt_icn" data-toggle="modal" data-target="#deleteGroup"><img src="../assets/img/delete_icon.png" /></a>
				<!-- delete icon end -->
				<!-- edit icon start -->
				<a href="#" class="lst_edit_icn" data-toggle="modal" data-target="#editGround"><img src="../assets/img/edit_icon.png" /></a>
				<!-- edit icon end -->
			</div>
			</div>
		</div>
		<!-- grounds list end -->
	</div>	
	<!-- grounds section end -->
		<!-- add ground btn start -->
		<a href="#" class="add_grnd_btn" data-toggle="modal" data-target="#addGround"><img src="../assets/img/plus_icon.png" /></a>
		<!-- add ground btn end -->
	</div>
</div>
<!-- content end -->

				<!-- Add Ground modal start -->
				<div class="modal fade add_slot_modal bs-example-modal-sm" id="addGround" tabindex="-1" role="dialog" aria-labelledby="addGroundLabel">
				  <div class="modal-dialog modal-sm" role="document">
				  <form>
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				        	<img src="../assets/img/close_icon.png" />
				        </button>
				        <h4 class="modal-title" id="addGroundLabel">Add Ground</h4>
				      </div>
				      <div class="modal-body">
						<div class="add_slot_tabs add_grund">						

						<!-- Tab panes -->
						<div class="add_slot_cntnt add_grund_cntnt">
							<div class="row">
							<div class="col-md-12">
								<div class="grnd_slct">
									<select v-model="ground.park_name">
										<option value="select">Select</option>
										<option v-for="park in parks" :key="park._id">{{ park.name }}</option>
									</select>
								</div>
							</div>
							</div>

								<div class="row">
									<div class="col-md-12">
										<div class="form-group has-feedback">
											<input type="text" v-model="ground.name" class="form-control" placeholder="Ground Name">
										</div>
									</div>
								</div>


								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback sprts_input">
								<input type="text" class="form-control" placeholder="Add New Sport" @keyup.enter="addSport">
								</div>
								</div>
									<div class="sprts_chck">
										<ul class="sprts_chck_box">
											<li v-for="sport in sports" :key="sport">
												<div class="check_div">
													<input type="checkbox" :id="sport" v-model="ground.sport" :value="sport" >
													<label :for="sport"></label>
												</div>
												<span>{{ sport }}</span>
											</li>
										</ul>
									</div>
								</div>
						</div>

						</div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal">
				        	<img src="../assets/img/cancel_icon.png" />
				        </button>
				        <button type="button"  @click="addGround" class="btn btn-primary save_btn">
				        	<img src="../assets/img/save_icon.png" />
				        </button>
				      </div>
				    </div>
				    </form>
				  </div>
				</div>
				<!-- Add Ground modal end -->

				<!-- Edit Ground modal start -->
				<div class="modal fade add_slot_modal bs-example-modal-sm" id="editGround" tabindex="-1" role="dialog" aria-labelledby="editGroundLabel">
				  <div class="modal-dialog modal-sm" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				        	<img src="../assets/img/close_icon.png" />
				        </button>
				        <h4 class="modal-title" id="editGroundLabel">Edit Ground</h4>
				      </div>
				      <div class="modal-body">
						<div class="add_slot_tabs add_grund">						

						<!-- Tab panes -->
						<div class="add_slot_cntnt add_grund_cntnt">
							<form>
							<div class="row">
							<div class="col-md-12">
								<div class="grnd_slct">
								<select disabled class="disabled_slct">
								<option>Lewisville</option>
								<option>Lewisville one</option>
								<option>Lewisville two</option>
								<option>Lewisville three</option>
								</select>
								</div>
							</div>
							</div>

								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" placeholder="Bakers Field">
								</div>
								</div>
								</div>


								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback sprts_input">
								<input type="text" class="form-control" placeholder="Add New Sport">
								</div>
								</div>
									<div class="sprts_chck">
									<ul class="sprts_chck_box">
									<li>
									<div class="check_div">
									<input type="checkbox" id="check1" name="check" value="false" checked="checked">
									<label for="check1"></label>
									</div>
									<span>Cricket</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="check2" name="check" value="false" checked="checked">
									<label for="check2"></label>
									</div>
									<span>Socker</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="check3" name="check" value="false" checked="checked">
									<label for="check3"></label>
									</div>
									<span>Tennis</span> 
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="check4" name="check" value="false" checked="checked">
									<label for="check4"></label>
									</div>
									<span>Baseball</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="check5" name="check" value="false">
									<label for="check5"></label>
									</div>
									<span>Archery</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="check6" name="check" value="false">
									<label for="check6"></label>
									</div>
									<span>Badminton</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="check7" name="check" value="false"><!-- checked -->
									<label for="check7"></label>
									</div>
									<span>Golf</span>
									</li>

									<li>
									<div class="check_div">
									<input type="checkbox" id="check8" name="check" value="false"><!-- checked -->
									<label for="check8"></label>
									</div>
									<span>Field Hockey</span>
									</li>

									</ul>
									</div>
								</div>
							</form>
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
				<!-- Add Ground modal end -->


				<!-- Delete Ground modal start -->
				<div class="modal fade dlt_grund_modal bs-example-modal-sm" id="deleteGroup" tabindex="-1" role="dialog" aria-labelledby="deleteGroundLabel">
				  <div class="modal-dialog modal-sm" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				        	<img src="../assets/img/close_icon.png" />
				        </button>
				        <h4 class="modal-title" id="deleteGroundLabel">Delete Ground</h4>
				      </div>
				      <div class="modal-body">
				      <div class="dlt_grund_cntnt">
				      	<p>There are 6 active reservations in this ground</p>
						<div class="dlt_grund_slct">
						<input id="radio1" name="radio" value="false" type="radio" checked="checked">
						<label for="radio1"></label>
						<p>Delete reservations and ground.</p>
						</div>
						<div class="dlt_grund_slct">
						<input id="radio1" name="radio" value="false" type="radio">
						<label for="radio1"></label>
						<p>Only delete ground (Doesn’t impact 
						current reservations, no future requests will be allowed)</p>
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
				<!-- Delete Ground modal end -->

				<!-- Confirm slot modal start -->
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
				<!-- Confirm slot modal end -->
	</div>
</template>

<script>

import HeaderComponent from '@/components/Header'
import SidebarComponent from '@/components/Sidebar'
import AppService from '@/services/AppService'

export default {
  data() {
    return {
      parks:[],
      ground:{ park_name:'select', sport:[] },
      sports:["Cricket", "Socker", "Field Hockey", "Tennis", "Badminton", "Baseball", "Archery", "Golf"]
    }
  },
  name: 'Grounds',
  props: {
    
  },
  methods: {
    async getParks () {
      const res = await AppService.getParks()
      console.log('parks @@@', res.data)
      this.parks = res.data.data
		},
		addGround () {
			console.log(this.ground.park_name,this.ground.sport)
		},
		addSport (event) {
			let sport = event.target.value
			this.sports.push(sport)
		}
  },
  mounted () {
  	this.getParks()
  },
  components: {
    HeaderComponent,
    SidebarComponent
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>