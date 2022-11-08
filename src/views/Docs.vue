<script setup>
import Comp1 from '../components/Comp1.vue';




</script>

<!-- <script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf : PDFViewer
  }
}
</script> -->

<template >
    <div class="docs docs__container">
      <h1>Docs</h1>
      <ul class="docs__content">
       <li class="docs__item">
              <a href="./file_1.pdf" target="_self">Антикоррупционная политика Федерального казенного предприятия "Орловская биофабрика" (ФКП "Орловская биофабрика").</a>
       </li>
       <li class="docs__item" ><a href="./file_1.pdf" target="_self">Кодекс этики и служебного поведения работников  Федерального казенного предприятия "Орловская биофабрика" (ФКП "Орловская биофабрика").</a></li>
       <li class="docs__item" ><a href="./file_2.pdf" target="_self">Порядок уведомления работодателя о фактах обращения в целях склонения работника ФКП "Орловская биофабрика" к совершению коррупционных правонарушений .</a></li>
       <li class="docs__item" ><a href="./file_3.pdf" target="_self">Порядок сообщения о возникновении личной заинтересованности при исполнении должностных обязанностей, которая приводит или может привести к конфликту интересов.</a></li>
       <li class="docs__item" ><a href="./file_4.pdf" target="_self">Приложение о конфликте интересов Федерального казенного предприятия "Орловская биофабрика" (ФКП "Орловская биофабрика")</a></li>
       <li class="docs__item" ><a href="./file_5.pdf" target="_self">Порядок уведомления работодателя о фактах обращения в целях склонения работников организаций, созданных для выполнения задач, поставленных перед Министерством труда и социальной защиты Российской Федерации, к совершению коррупционных правонарушений​</a></li>
       <li class="docs__item" ><a href="./file_6.pdf" target="_self">Порядок сообщения работниками ФКП «Орловская биофабрика» о получении подарка в связи с их должностным положением или исполнением ими должностных обязанностей.</a></li>
       <li class="docs__item" ><a href="./file_7.pdf" target="_self">Приказ об утверждении "Положения об организации на Федеральном казенном предприятии "Орловская биофабрика" системы внутреннего обеспечения соответствия требованиям антимонопольного законодательства (антимонопольного комплаенса)"</a></li>
       <li class="docs__item" ><a href="./file_8.pdf" target="_self">Положение об организации на Федеральном казенном предприятии "Орловская биофабрика" системы внутреннего обеспечения соответствия требованиям антимонопольного законодательства</a></li>
       <li class="docs__item" ><a href="./file_9.pdf" target="_self">Прайс-лист ФКП "Орловская биофабрика" с 01.07.2022 г.</a></li>
       <li class="docs__item" ><a href="./file_10.pdf" target="_self">Доклад об антимонопольном комплаенсе за 2020 год</a></li>
       <li class="docs__item" ><a href="./file_11.pdf" target="_self">Приказ №65 от 24.02.2021 года "Об утверждении карты комплаенс - рисков, плана мероприятий ("дорожная карта") по снижению комплаенс - рисков и ключевых показателей эффективности антимонопольного законодательства ФКП "Орловская биофабрика"</a></li>
       <li class="docs__item" ><a href="./file_12.pdf" target="_self">Отчет о проведении специальной оценки условий труда</a></li>


      </ul>

    </div>

<!-- <Comp1></Comp1> -->
</template>

<style lang="scss">
.docs{
  min-height: 50vh;
}
ul{
  list-style-type: disc;
}

.docs {

		// .docs__container

		&__container {
		}

		// .docs__content

		&__content {
                     margin: 0 8vw;
      // list-style: inside;
      text-align: left;
		}

		// .docs__item

		&__item {
      list-style:disc;
      padding: 5px;
      background-image: linear-gradient(to right, #f8a7a780, #94f1d65c);
      box-shadow: 6px -2px 3px rgba(0, 0, 0, 0.3);
      margin-bottom: 8px;
      transition: all 0.1s ease 0s;
      &:hover{
        text-decoration: underline;
        transform: scale(1.01);

      }
		}
}

</style>
