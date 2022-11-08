<script setup>
import Comp1 from '../components/Comp1.vue';
import { ref } from 'vue'

const activeTab = ref(true);
const tabId = ref(1);

const tabChange = function(el){
  //  tabId.value = el.key
   console.log("🚀 el.key", el.key)
   
   

}


</script>

<template >
    <div class="contacts contacts__container">
      <!-- <h1>Контакты</h1> -->
      <div class="content">
        <div class="content__tabs tabs">
          <nav class="tabs__items">



            <router-link :to=" {name:'t1', hash: '#tab_01'}"><a href="#tab_01" :class="[(tabId == 1) ? 'activeTab' : 'nn']" @click="tabId = 1" class="tabs__item" :key="1">Контакты </a></router-link>
            <router-link :to=" {name:'t2', hash: '#tab_02'}"><a href="#tab_02" :class="[(tabId == 2) ? 'activeTab' : 'nn']" @click="tabId = 2" class="tabs__item" :key="2">Реквизиты</a></router-link>
            <router-link :to=" {name:'t3', hash: '#tab_03'}"><a href="#tab_03" :class="[(tabId == 3) ? 'activeTab' : 'nn']" @click="tabId = 3" class="tabs__item" :key="3">Как доехать</a></router-link>
          </nav>
          <!-- ------- -->
<Transition>

              <router-view>
          <div class="tabs__body">
            <div class="tabs__block" id="tab_01"
            :class="[(tabId == 1) ? 'activeTab' : 'hide']">

  <h2>ФКП "Орловская биофабрика"</h2>

  <p><strong>Россия<br>
  302501, Орловская область, Орловский район, п. Биофабрика</strong><br>


  <a href="tel:+74862736683">+7 (4862) 73-66-83</a><br>
  <a href="tel:+74862409525">+7 (4862) 40-95-25</a><br>
  <a href="mailto:bio.info@mail.ru">bio.info@mail.ru</a><br>
  <br>
  <hr>
  <strong>Директор ФКП "Орловская биофабрика":<br>
  Клименко Андрей Владимирович&nbsp;</strong><br>

  <a href="tel:+74862736683">+7 (4862) 73-66-83</a>
  <br>
  <hr>
  <strong>Секретарь:<br>
  Курбатова Юлия Вячеславовна</strong><br>
  тел.:
  <a href="tel:+74862409335">+7 (4862) 40-93-35</a>
  <br>
  <hr>
  <strong>Специалист по маркетингу:<br>
  Комарова Карина Андреевна</strong><br>
  тел.:
  <a href="tel:+74862409525">+7 (4862) 40-95-25</a><br>

  e-mail:<a href="https://e.mail.ru/compose/?mailto=mailto%3abiofabricka@yandex.ru" rel="noopener" target="_blank">biofabricka@yandex.ru</a>&nbsp;(Сбыт)</p>

  <p><br>
  </p>

            </div>
            <div class="tabs__block" id="tab_02"
            :class="[(tabId == 2) ? 'activeTab' : 'hide']">
              <p><strong>Федеральное казенное предприятие "Орловская биофабрика"</strong><br>
  (ФКП "Орловская биофабрика")<br>
  Юридический адрес: 302501, Россия, Орловская область, Орловский район, поселок Биофабрика<br>
  <strong>ИНН</strong> 5720002258<br>
  <strong>КПП</strong> 572001001<br>
  <strong>ОГРН</strong> 1025700696207<br>
  р/с 40502810816160150602 в Центрально-черноземном филиале АО "Экспобанк" г. Курск<br>
  к/с 30101810345250000330<br>
  <strong>БИК</strong> 043807330<br>
  Директор&nbsp;Клименко Андрей Владимирович</p>
            </div>
            <div class="tabs__block" id="tab_03"
            :class="[(tabId == 3) ? 'activeTab' : 'hide']">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A47d6d6f69440702e3792cec7f3eac177b9cb7cb7e5c8141e34e1533a0c8f393a&amp;source=constructor" width="100%" height="720" frameborder="0"></iframe>
            </div>
          </div>
          <!-- ----- -->
              </router-view>
</Transition>

        </div>

      </div>
    </div>

<!-- <Comp1></Comp1> -->
</template>

<style lang="scss">
a {
  color: brown;
}
.contacts{
  flex: 1 1 auto;
  line-height: 22px;
}


.content {
  // padding: 50px 0;
		// .content__tabs

		&__tabs {
		}
}
.tabs {


		// .tabs__items

		&__items {
      transition: all 0.3s ease 0s;
      // padding-bottom: 30px;
      display: flex;
      justify-content: space-around;
      // margin: 10px 0%;
      position: sticky;
      top: 90px;
      // background: rgba(235, 220, 220);
      line-height: 40px;
      background: rgba(37, 37, 37, 0.76);
      &>a:hover{
        
      }

    .scrolledBody &{
      top: 1px;
    }
    }

		// .tabs__item

		&__item {
      flex: 0 1 33.333%;
      text-transform: uppercase;
      font-size: 22px;
      color: white;
      &.activeTab,&:hover{
        color: #F1C40F;
        
      }

		}

		// .tabs__body

		&__body {
      min-height: fit-content;
		}

		// .tabs__block

		&__block {

      padding: 20px;
      margin-top: 10px;
      // display: none;
      &:nth-child(1){
        background: rgba(184, 118, 118, 0.445);
      }
      &:nth-child(2){
        background: rgba(155, 184, 118, 0.452);
      }
      &:nth-child(3){
        background: rgba(163, 118, 184, 0.521);
        iframe{
          padding-right: 20px;
          padding-bottom: 40px;
        }
      }
      // &:target{
      //   display: block;
      // }

      &.hide{
  display: none;
}
		}
}
// _____
.activeTab{
  
}





/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: .5s ease;
  transform: translateX(-10px);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(0px);
}


</style>
