<script setup>

import prodNamesArray0 from '../router/Names';


import { imGet } from '../router';

// const prodArr = Array(8).fill().map((e,j)=>j+1)
const routLink = 'rtnav'
// const routLinkActive = 'router-link-active router-link-exact-active'



  const activeLink = document.querySelectorAll(".rtnav");




</script>

<template >
    <div class="product product__container">

      <div class="product__nav nav">
        <ul  class="nav__menu">
          
          <li class="nav__item" v-for="(prodName, i) in prodNamesArray0.title" :key="i">
            <router-link
              :class="routLink"
              :active="(i == 0)"

              :to="{
              name: 'prod',
              params: {
                idx: (i + 1),
                msg: prodNamesArray0.title[(i)],

               imgLink: imGet((i + 1)),
              //   consist: prodNamesArray0.descr.consist[(i + 1)],
              //   props: prodNamesArray0.descr.props[(i + 1)],
              //   forwhat: prodNamesArray0.descr.forwhat[(i + 1)],
              //   use: prodNamesArray0.descr.use[(i + 1)],
              //   danger: prodNamesArray0.descr.danger[(i + 1)],
              //   pack: prodNamesArray0.descr.pack[(i + 1)],
              //   safekeep: prodNamesArray0.descr.safekeep[(i + 1)],

              }
            }">{{prodName}}
            </router-link>

<!-- :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" -->
            <!-- <img :src=imGet((i+1))> -->

             <!-- props: {
            msg: prodNamesArray0.title[index],
            imgLink: imGet(j),
            descr: prodNamesArray0.descr,
            idx: index
         } -->

             <!-- :to="{ name: 'prod' + i + 1, path: ('/Product/prod' + (i + 1)), query: ['private']  }">{{prodName}} -->

            <!-- :to="{ path: ('/Product/prod' + (i + 1)), query: ['private']  }">{{prodName}} -->
            <!-- :to="{path: ('/Product/prod' + (i + 1)), params:{ msg: prodName, imgLink: imGet((i+1)) }}">{{prodName}} -->
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
        
<!-- <div class="boxx"></div> -->
      </div>

      <div class="product__content">
        <!-- <Prod1></Prod1> -->

        <router-view >

        </router-view>
      </div>

    </div>


</template>

<style lang="scss" scoped>
.boxx{
  width: 150px;
  height: 200px;
  background-color: rgb(117, 91, 91);
  position:sticky;
  top: 123px;
}
.rtnav{
  display: inline-block;
  padding: 5px;
  transition: all 0.2s ease 0s;
  border: 2px solid white;
  line-height: 1.1em;

  border-left: 4px solid white;
}
.router-link-active, .rtnav:hover {

  // color: rgb(0, 199, 27);
  // text-shadow: 3px -1px 7px rgba(0, 199, 27, 0.212);
  span{text-decoration: underline;}

}
.router-link-active{
  color: white;
  background: rgb(0, 199, 99);
  border-left: 4px rgb(0, 199, 99) solid;

  background: rgba(193, 252, 222, 0.712);
  background:  rgba(193, 252, 222, 0.712);
  background-image: linear-gradient(to right,rgba(170, 255, 211, 0.712), rgba(169, 216, 255, 0.507));
  color: rgb(2, 139, 71);
}
.rtnav:hover {
// border: 2px solid rgb(0, 199, 99);
border-left: 4px solid rgb(0, 199, 99);
background: rgba(193, 252, 222, 0.712);
color: rgb(2, 139, 71);
// background: rgba(181, 255, 218, 0.877);
// color: brown;
}

.product {
  display: flex;

		// .product__nav

		&__nav {
      flex: 0 1 200px;
      align-items: flex-start;
      // border:dashed 3px #000;
      border-right: 1px solid #000;


		}

		// .product__content

		&__content {
		}
}
.nav{

  &__menu{
    position: sticky;
    top: 88px;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    text-align: left;

  // overflow-y: scroll;

    // height: 200vh;
  }

  &__item{

    .rtnav{

  text-align: left;
    }
  }
}


</style>
