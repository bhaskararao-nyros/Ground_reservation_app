<template>
	<div>
	<HeaderComponent />
	<SidebarComponent />
	<notifications group="foo" />
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
		<div class="grunds_lst row" v-for="ground in grounds" :key="ground._id">
			<!-- grounds list name start -->
			<div class="col-md-5 col-xs-4"><h3>{{ ground.name }}</h3></div>
			<!-- grounds list name end -->

			<!-- grounds list sports start -->
			<div class="col-md-5 col-xs-5">

				<!-- grounds sports pills start -->
				<div class="sprts_pills">
					<ul>
						<li v-for="sport in ground.sports.slice(0, 3)" :key="sport">{{ sport }} <span class="cls_pill"><img src="../assets/img/close_icon.png" /></span></li></ul>
				</div>
				<!-- grounds sports pills end -->
				<div v-popover.right="{ name: ground._id }">
					<span class="more_sprts glyphicon glyphicon-option-horizontal"></span>
				</div>
				<popover :name="ground._id">
				  <div class="sprts_pills pop_over_pills">
						<ul>
							<li v-for="sport in ground.sports" :key="sport">{{ sport }} <span class="cls_pill"><img src="../assets/img/close_icon.png" /></span></li>
						</ul>
					</div>
				</popover>
			</div>
			<!-- grounds list sports end -->

			<div class="col-md-2 col-xs-3">
			<div class="lst_actns">
				<!-- delete icon start -->
				<a href="#" @click="deleteGround(ground._id)" class="lst_dlt_icn" data-toggle="modal" data-target="#deleteGroup"><img src="../assets/img/delete_icon.png" /></a>
				<!-- delete icon end -->
				<!-- edit icon start -->
				<a href="#" @click="editGround(ground)" class="lst_edit_icn" data-toggle="modal" data-target="#editGround"><img src="../assets/img/edit_icon.png" /></a>
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
									<select v-model="ground.park_id">
										<option value="select">Select</option>
										<option v-for="park in parks" :value="park._id" :key="park._id">{{ park.name }}</option>
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
													<input type="checkbox" :id="sport" v-model="ground.sports" :value="sport" >
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
				        <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_gr_modal">
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
				  <form>
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
							<div class="row">
							<div class="col-md-12">
								<div class="grnd_slct">
								<select v-model="ground.park_id">
									<option v-for="park in parks" :value="park._id" :key="park._id">{{ park.name }}</option>
								</select>
								</div>
							</div>
							</div>

								<div class="row">
								<div class="col-md-12">
								<div class="form-group has-feedback">
								<input type="text" class="form-control" placeholder="Bakers Field" v-model="ground.name">
											<input type="hidden" v-model="ground._id" name="edit_gr_id">
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
													<input type="checkbox" :id="sport" v-model="ground.sports" :value="sport" >
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
				        <button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_edit_modal">
				        	<img src="../assets/img/cancel_icon.png" />
				        </button>
				        <button type="button" class="btn btn-primary save_btn" @click="updateGround">
				        	<img src="../assets/img/save_icon.png" />
				        </button>
				      </div>
				    </div>
				    </form>
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
						<button type="button" class="btn btn-default cncel_btn" data-dismiss="modal" ref="close_del_modal">
						<img src="../assets/img/cancel_icon.png" />
						</button>
						<button type="button" class="btn btn-primary save_btn" @click="deleteGrFun">
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
      grounds:[],
      ground:{ park_id:'select', sports:[] },
      sports:["Cricket", "Socker", "Field Hockey", "Tennis", "Badminton", "Baseball", "Archery", "Golf"],
      del_gr_id:'',
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
		async getGrounds () {
      const res = await AppService.getGrounds()
      console.log('grounds @@@', res.data)
      this.grounds = res.data.data
		},
		async addGround () {
			const res = await AppService.addGround(this.ground)
			console.log('grounds @@@', res.data)
			if (res.data.status === "success") {
				this.grounds.push(res.data.data)

				this.$notify({
		      group: 'foo',
		      type:'success',
		      text: res.data.message
		    });
			} else {
				this.$notify({
		      group: 'foo',
		      type:'error',
		      text: res.data.message
		    });
			}
			this.$refs.close_gr_modal.click()
		},
		addSport (event) {
			let sport = event.target.value
			this.sports.push(sport)
		},
		editGround (ground) {
			this.ground._id = ground._id
			this.ground.name = ground.name
			this.ground.park_id = ground.park_id
			this.ground.sports = ground.sports
		},
		async updateGround () {
			const res = await AppService.updateGround(this.ground)
			console.log(res.data)
			if (res.data.status === 'success') {
				this.grounds = res.data.data
				this.$notify({
		      group: 'foo',
		      type:'success',
		      text: 'Ground updated successfully'
		    });
			}
			this.$refs.close_edit_modal.click()
		},
		deleteGround (id) {
			this.del_gr_id = id;
		},
		async deleteGrFun () {
			let data = {id:this.del_gr_id}
			const res = await AppService.deleteGround(data)
			if (res.data.status === 'success') {
				this.grounds = res.data.data
				this.$notify({
		      group: 'foo',
		      type:'success',
		      text: 'Ground deleted successfully'
		    });
			}
			this.$refs.close_del_modal.click()
		}
  },
  mounted () {
  	this.getParks()
  	this.getGrounds()
  },
  components: {
    HeaderComponent,
    SidebarComponent
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-popover {
  left: 75% !important;
  top: -55px !important;
  width: auto !important;
}
.vue-popover .sprts_pills{
	padding: 10px;
}
</style>