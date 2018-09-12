//@flow
import moment                            from 'moment'
import { frequencies, WEEKLY, BIWEEKLY } from '../../../services/checkins'

export const STEP1 = '1'
export const STEP2 = '2'
export const STEP3 = '3'
export const STEP4 = '4'
export const STEP5 = '5'
export const STEP6 = '6'
export const STEP7 = '7'
export const STEP8 = '8'
export const STEP9 = '9'
export const STEP10 = '10'
export const STEP11 = '11'
export const STEP12 = '12'
export const STEP13 = '13'
export const STEP14 = '14'
export const STEP15 = '15'
export const STEP16 = '16'
export const STEP17 = '17'
export const STEP18 = '18'
export const STEP19 = '19'
export const STEP20 = '20'
export const STEP21 = '21'
export const STEP22 = '22'
export const STEP23 = '23'
export const STEP24 = '24'
export const STEP25 = '25'
export const STEP26 = '26'
export const STEP27 = '27'
export const STEP28 = '28'
export const STEP29 = '29'
export const STEP30 = '30'

export type STEP =
  | STEP1
  | STEP2
  | STEP3
  | STEP4
  | STEP5
  | STEP6
  | STEP7
  | STEP8
  | STEP9
  | STEP10
  | STEP11
  | STEP12
  | STEP13
  | STEP14
  | STEP15
  | STEP16
  | STEP17
  | STEP18
  | STEP19
  | STEP20
  | STEP21
  | STEP22
  | STEP23
  | STEP24
  | STEP25
  | STEP26
  | STEP27
  | STEP28
  | STEP29
  | STEP30

export type Checkin = {
  text: string,
  title: string,
  lastCheckin: string,
  frequency: string,
  link: string,
  message: string,
}

export const checkins = {
  [STEP1]: {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis mollitia maiores asperiores illum. Expedita beatae similique eos velit, perspiciatis itaque sequi voluptatem sed repellendus cum sint suscipit et non.',
    title: 'Checkin for step1!',
    message: 'You have a notification pending for your board of advisors!',    
    lastCheckin: moment()
      .subtract(5, 'd')
      .format('YYYY-MM-DD HH:mm:ss'),
    frequency: frequencies[WEEKLY],
    link: 'journey/rewards?reward=4'
  },
  [STEP2]: {
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis mollitia maiores asperiores illum. Expedita beatae similique eos velit, perspiciatis itaque sequi voluptatem sed repellendus cum sint suscipit et non.',
    title: 'Checkin for step2!',
    message: 'You have a notification pending for your weekly timetable!',
    lastCheckin: moment().subtract(2, 'd'),
    frequency: frequencies[BIWEEKLY],
    link: 'journey/rewards?reward=2'
  }
}
