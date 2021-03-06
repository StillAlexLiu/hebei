import ContainerCalc from './ContainerCalc'
import Container from './Container'
import ContainerBorderStyle1 from './ContainerBorderStyle1'
import ContainerWithIcon from './ContainerWithIcon'
import ContainerCenterTitle from './ContainerCenterTitle'
import ContainerLeftTitle from './ContainerLeftTitle'
import ContainerFour from './ContainerFour'
import ContainerFourDash from './ContainerFourDash'
import ContainerSmallTitle from './ContainerSmallTitle'
import ContainerOnlyTitle from './ContainerOnlyTitle'
import ContainerCenterTitle2 from './ContainerCenterTitle2'
// 山东的
import ContainerBorder1 from './ContainerBorder1'
import ContainerBorder2 from './ContainerBorder2'
import ContainerBorder21 from './ContainerBorder21'
import ContainerBorder3 from './ContainerBorder3'
import ContainerBorder31 from './ContainerBorder31'
import ContainerBorder32 from './ContainerBorder32'
import ContainerBorder33 from './ContainerBorder33'
import ContainerInfo from './ContainerInfo'
import ContainerInfoCard from './ContainerInfoCard'
import ContainerWarning from './ContainerWarning'

export default {
  install: (Vue) => {
    Vue.component('ContainerBorderStyle1', ContainerBorderStyle1)
    Vue.component('ContainerCalc', ContainerCalc)
    Vue.component('Container', ContainerLeftTitle)
    Vue.component('ContainerCenterTitle', ContainerCenterTitle)
    Vue.component('Container2', Container)
    Vue.component('ContainerWithIcon', ContainerWithIcon)
    Vue.component('ContainerFour', ContainerFour)
    Vue.component('ContainerFourDash', ContainerFourDash)
    Vue.component('ContainerSmallTitle', ContainerSmallTitle)
    Vue.component('ContainerOnlyTitle', ContainerOnlyTitle)
    // 山东的
    Vue.component('ContainerBorder1', ContainerBorder1)
    Vue.component('ContainerBorder2', ContainerBorder2)
    Vue.component('ContainerBorder21', ContainerBorder21)
    Vue.component('ContainerBorder3', ContainerBorder3)
    Vue.component('ContainerBorder31', ContainerBorder31)
    Vue.component('ContainerBorder32', ContainerBorder32)
    Vue.component('ContainerBorder33', ContainerBorder33)
    Vue.component('ContainerInfo', ContainerInfo)
    Vue.component('ContainerInfoCard', ContainerInfoCard)
    Vue.component('ContainerWarning', ContainerWarning)
    Vue.component('ContainerCenterTitle2', ContainerCenterTitle2)
  }
}
