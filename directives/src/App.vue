<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'The text directive'"></p>
        <!--Make sure to sanitize output when using v-html-->
        <p v-html="'<strong>The html directive</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background="'red'">Colour this</p>
        <p v-highlight="'red'">Colour this no arg</p>

        <p v-highlight:background.delayed="'red'">Delayed color</p>

        <p v-local-highlight:background="'blue'">Local Directive</p>

        <p v-local-highlight:background.delayed.blink="'red'">Local Directive blink</p>

        <p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500 }">Local Directive blink</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  //local registration
  directives: {
    "local-highlight": {
      bind(el, binding, vNode) {
        var delay = 0;

        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }

        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);

              if (binding.arg === "background") {
                el.style.background = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.background = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, binding.value.delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
