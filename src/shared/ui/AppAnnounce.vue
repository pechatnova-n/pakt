<template>
  <div class="announce">
		<div class="announce__icon">
      <svg class="announce__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_3811_4237)">
					<path d="M11 17H13V11H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z" fill="#0059A3"></path>
				</g>
				<defs>
					<clipPath id="clip0_3811_4237">
						<rect width="24" height="24" fill="white"></rect>
					</clipPath>
				</defs>
			</svg>
    </div>
		<div class="announce__text">
      <center>{{ announce.title }}</center>
      <div v-html="announce.text"></div>
    </div>
	</div>
</template>
<script>
export default {
  props: {
    announce: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .announce__text a {
      text-decoration: underline;
      transition: all 0.3s ease-in-out;
  }

  .announce__text a:hover {
      text-decoration: none;
  }
</style>