<script setup>
// import Prod1 from '../components/ProdCards/prod1.vue';

const prodNamesArray = [
  'Вакцина против сибирской язвы животных из штамма 55-ВНИИВВиМ живая жидкая',         //1
  'Вакцина против сибирской язвы животных из штамма 55-ВНИИВВиМ живая сухая',         //2
  'Вакцина против сибирской язвы и эмфизематозного карбункула ассоциированная живая', //3
  'Сыворотка противосибореязвенная из крови лощади',                                  //4
  'Глобулин противосибиреязвенный из сыворотки крови лошади',                         //5
  'Сыворотка сибиреязвенная преципитирущая из крови лощади',                          //6
  'ПРЕЦИПАНТР® набор компонентов для диагностики сибирской язвы в реакции преципитации',//7
  'Антиген сибиреязвенный бактерийный стандартный',                                        //8

] //массив названий продуктов

const prodArr = Array(8).fill().map((e,j)=>j+1)
const routLink = 'rtnav'


  const activeLink = document.querySelectorAll(".rtnav");





</script>

<template >
    <div class="product">

      <div class="product__nav nav">
        <ul  class="nav__menu">
          <li class="nav__item" v-for="(item, i) in prodNamesArray" :key="i">
            <router-link :class="routLink"  :to="{path: ('/Product/prod' + (i + 1)), params:{ head: item}}">{{item}}</router-link>
          </li>

          <!-- <li>
            <router-link to="/Product/prod2">ggg2</router-link>
          </li>
          <li >
            <router-link to="/Product/prod3">ggg</router-link>
          </li>
          <li>
            <router-link to="/Product/prod4">ggg2</router-link>
          </li>
          <li >
            <router-link to="/Product/prod5">ggg</router-link>
          </li>
          <li>
            <router-link to="/Product/prod6">ggg2</router-link>
          </li>
          <li >
            <router-link to="/Product/prod7">ggg</router-link>
          </li>
          <li>
            <router-link to="/Product/prod8">ggg2</router-link>
          </li> -->
        </ul>
      </div>
      <div class="product__content">
        <!-- <Prod1></Prod1> -->
        <h1 >
          </h1>
        <router-view head = {{prodNamesArray0[0]}}></router-view>
      </div>

    </div>


</template>

<style lang="scss" scoped>
.rtnav{
  display: inline-block;
  padding: 5px;
  transition: all 0.2s ease 0s;
  border: 2px solid white;
  line-height: 1.1em;
}
.router-link-active, .rtnav:hover {

  // color: rgb(0, 199, 27);
  // text-shadow: 3px -1px 7px rgba(0, 199, 27, 0.212);
  span{text-decoration: underline;}

}
.router-link-active{
  color: white;
  background: rgb(0, 199, 99);
}
.rtnav:hover {
border: 2px solid rgb(0, 199, 99);
}

.product {
  display: flex;

		// .product__nav

		&__nav {
      flex: 0 1 200px;
      align-items: flex-start;
		}

		// .product__content

		&__content {
		}
}
.nav{

  &__menu{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    text-align: left;
  }

  &__item{

    .rtnav{

  text-align: left;
    }
  }
}


</style>
