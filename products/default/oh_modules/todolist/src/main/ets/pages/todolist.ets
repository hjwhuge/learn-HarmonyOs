interface listItem {
  id: number,
  content: string,
  status: boolean,
}

@Entry
@Component

export struct todolist {
  // 保存新事项的输入内容
  @State text: string = '';
  @State listArr: Array<listItem> = [];

  build() {
    Column() {
      Text('ToDo List')
        .fontSize(40)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 16 })
      Row() {
        TextInput({ text: $$this.text, placeholder: '请输入代办事项' })
          .width('80%')
          .caretColor('#58bc58')
          .margin({ right: 16 })
        Button() {
          Text('添加')
            .fontSize(22)
            .fontWeight(FontWeight.Bold)
            .fontColor(Color.White)
            .padding({top: 4, right: 8, bottom: 4, left: 8})
        }
        .type(ButtonType.Normal)
        .borderRadius('10%')
        .backgroundColor(Color.Green)
        .onClick(() => {
          if (this.text !== '') {
            const obj: listItem = {id: this.listArr.length, content: this.text, status: false}
            this.listArr.unshift(obj)
            this.text = ''
          }
        })
      }
      .margin({ bottom: 16 })
      List() {
        ForEach(this.listArr, (item: listItem, idx: number) => {
          ListItem() {
            Row() {
              Text(String(item.id + 1))
                .fontSize(24)
                .fontColor(Color.White)
                .fontWeight(FontWeight.Bold)
              Text(item.content)
                .fontSize(24)
                .fontColor(Color.White)
                .fontWeight(FontWeight.Bold)
              Button(){
                Text('删除')
              }
              .fontSize(24)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.Red)
              .padding({top: 4, right: 8, bottom: 4, left: 8})
              .backgroundColor(Color.Transparent)
              .onClick(() => {
                this.listArr.splice(idx, 1)
              })
            }
            .width('90%')
            .padding({ top: 4, right: 10, bottom: 4, left: 10})
            .borderRadius(4)
            .backgroundColor('#bae0ff')
            .justifyContent(FlexAlign.SpaceBetween)
          }
          .margin({ bottom: 16 })
        }, (item: listItem) => item.content )
      }
      .width('80%')
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)


  }
}
