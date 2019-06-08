<template>
    <div>
<div v-if="days <= '0' && hours <= '0'&& minutes <= '0' && seconds <= '0'">
            <p class="text-danger">00:00:00:00
                <span class="badge badge-danger text-right">Not Active</span>
            </p>
        </div>
        <div v-else>
             <p>{{timer.days}}:{{timer.hours}}:{{timer.minutes}}:{{timer.seconds}}
            <span class="badge badge-success text-right">Active</span>
             </p>
        </div>
</div>
</template>
<script>
// import { setTimeout } from 'timers';
export default {
   props: {
       checkout: {
           type:String
       },
       checkin: {
           type:String
       }
   },
   data() {
       return {
           now:0,
           count:0,
           timeLeft:0,
           timer:{}
       }
   },
   methods: {
     timer_loop() {
        this.count++;

        let end = Date.parse(this.checkout);
        let checkin = Date.parse(this.checkin);

            let now = new Date().getTime();

        if(now>=checkin){
            let handler = setInterval(()=>{
            let start = new Date().getTime();
            this.timeLeft = (end - start)/1000;
            this.timer = {
                seconds: Math.trunc((((this.timeLeft%86000)%3600)%60)),
                minutes: Math.trunc(((this.timeLeft%86400)%3600)/60),
                hours: Math.trunc((this.timeLeft%86400)/3600),
                days: Math.trunc(this.timeLeft/86400),

            }

           //console.log(this.timer)
            if(this.timeLeft<1){
                clearInterval(handler);

            }
        },1000)

        }
       // console.log(start>end)

        
        //this.now = Math.trunc(new Date().getTime() / 1000);
       // this.count < 200 && setTimeout(this.timer_loop , 1000)
     }
   },
   mounted() {
       this.timer_loop()
   },
   computed: {
       seconds() {
           return (((this.timeLeft%86000)%3600)%60)
        },
        minutes() {
            return Math.trunc(((this.timeLeft%86400)%3600)/60)
        },
        hours() {
            return Math.trunc((this.timeLeft%86400)/3600)
        },
        days() {
            return Math.trunc(this.timeLeft/86400)
        },
    //    modifiedDate() {
    //        return Math.trunc(Date.parse(this.date) / 1000)
    //    }
   }
}
</script>

<style>

</style>
