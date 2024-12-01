<template>
  <div class="main-page__balance">
												<div class="main-page__balance-top">
													<div class="main-page__balance-id">
														<CardId class="main-page__copy" :personalId="personalId" />  
															<!-- <div class="copy__text" data-copy-text="">0987654321</div> -->
													</div>
													<div class="main-page__balance-row">
														<div class="main-page__balance-label">Баланс</div>
													</div>
													<div class="main-page__balance-inner">
														<div class="main-page__balance-col">
															<div class="main-page__balance-money">978,56 ₽</div>
															<div class="main-page__balance-text">Услуги предоставляются</div>
														</div>
														<div class="main-page__balance-col">
															<div class="main-page__balance-btn">
                                <CustomButton :button-size="12.8125">Пополнить</CustomButton>
                              </div>
														</div>
													</div>
												</div>
												<div class="main-page__balance-bot"><a class="main-page__balance-item" href="#">
														<div class="main-page__balance-icon"><svg class="main-page__balance-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M19.3005 4.78188C21.0413 6.7837 22 8.34715 22 11H20C20 8.87772 19.033 7.82696 17.6404 6.22551C16.2478 4.62406 14.3233 3.57983 12.2216 3.28523C10.1199 2.99062 7.98246 3.46548 6.20319 4.62232C4.42393 5.77916 3.12267 7.54003 2.53916 9.58052C1.95565 11.621 2.12921 13.8036 3.02785 15.7263C3.9265 17.6489 5.48969 19.182 7.42942 20.0431C9.36915 20.9042 11.5547 21.0353 13.5835 20.4123C15.5456 19.8097 17.2332 18.5409 18.3571 16.8285L19.7076 18.4491C18.3448 20.4506 16.5927 21.7895 14.2294 22.5153C11.6934 23.2941 8.96144 23.1302 6.53678 22.0539C4.11211 20.9775 2.15812 19.0611 1.03482 16.6578C-0.0884922 14.2545 -0.305439 11.5262 0.423946 8.97564C1.15333 6.42503 2.77991 4.22394 5.00399 2.77789C7.22808 1.33184 9.89982 0.738268 12.527 1.10653C15.1541 1.47478 17.5597 2.78006 19.3005 4.78188Z" fill="#56BD68"></path>
																<path d="M20.7333 16L17 11H24L20.7333 16Z" fill="#56BD68"></path>
																<path d="M9 9L15.3373 9C15.2256 8.3191 15.0573 7.64996 14.8345 7H7C6.44772 7 6 7.44772 6 8V15C6 15.5523 6.44772 16 7 16H17.6667L13.5 11H9C8.44771 11 8 10.5523 8 10C8 9.44772 8.44771 9 9 9Z" fill="#56BD68"></path>
															</svg></div>
														<div class="main-page__balance-content">
															<div class="main-page__balance-heading">Автоплатеж</div>
															<div class="main-page__balance-status">Активен</div>
														</div>
													</a><a class="main-page__balance-item" href="#">
														<div class="main-page__balance-icon"><svg class="main-page__balance-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C11.4794 22 10.968 21.9602 10.4688 21.8835C10.7848 21.7155 11 21.3829 11 21V17C11 16.4477 10.5523 16 10 16H3C2.94478 16 2.8906 16.0045 2.83782 16.0131C2.29901 14.7847 2 13.4273 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.0025 7C11.7366 7 11.4816 7.10549 11.2936 7.29325C11.1056 7.48102 11 7.73569 11 8.00123V13.0074C11.0001 13.2729 11.1057 13.5275 11.2937 13.7153L14.3011 16.7189C14.4902 16.9013 14.7434 17.0022 15.0062 17C15.2691 16.9977 15.5205 16.8924 15.7064 16.7067C15.8923 16.5211 15.9977 16.27 16 16.0075C16.0022 15.745 15.9012 15.492 15.7186 15.3032L13.0049 12.5929V8.00123C13.0049 7.73569 12.8993 7.48102 12.7113 7.29325C12.5233 7.10549 12.2683 7 12.0025 7Z" fill="#C3C9CF"></path>
																<path d="M3 19L8 19" stroke="#C3C9CF" stroke-width="2" stroke-linecap="round"></path>
															</svg></div>
														<div class="main-page__balance-content">
															<div class="main-page__balance-heading">Условный платеж</div>
															<div class="main-page__balance-status">Не подключен</div>
														</div>
													</a>
                        </div>
											</div>
</template>

<script>
import CardId from './CardId.vue';
import CustomButton from './CustomButton.vue';

export default {
  components: {
    CardId,
    CustomButton,
  },
  props: {
    personalId: {
      type: [String, Number], 
      required: true,
    }
  }
}
</script>

<style scoped>
  .main-page__copy {
    margin-top: 0;
  }
</style>