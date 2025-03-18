import { router } from '@kit.ArkUI'

@Entry
@Component
export struct Index {

  build() {
    Row() {
      Button() {
        Text('添加')
          .fontSize(22)
          .fontWeight(FontWeight.Bold)
          .fontColor(Color.White)
          .padding({top: 4, right: 8, bottom: 4, left: 8})
      }
      .type(ButtonType.Normal)
      .borderRadius('10%')
      .backgroundColor('#ff9c6e')
      .onClick(() => {
        router.pushUrl({url: 'pages/Second'})
      })
    }
    .width('100%')
    .height('100%')
    .alignItems(VerticalAlign.Center)
    .justifyContent(FlexAlign.Center)
  }
}
