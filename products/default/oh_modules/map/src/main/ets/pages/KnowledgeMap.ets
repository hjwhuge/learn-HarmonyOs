import { NavBarItemType } from '../view/NavBarItem'
import { NavBarItem } from '../view/NavBarItem'
import { Section, KnowledgeMapContent  } from '../view/KnowledgeMapContent';
import { util } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';

@Preview
@Component

export struct KnowledgeMap {
  @Provide('knowledgeMapPageStack') knowledgeMapPageStack: NavPathStack = new NavPathStack()
  @State currentNavBarIndex: number = -1
  @Builder
  PageMap(name: string) {
    if (name === 'KnowledgeMapContent') {
      KnowledgeMapContent({ section: this.sections[this.currentNavBarIndex] })
    }
  }

  @State navBarList: NavBarItemType[] = [
    { order: '01', title: '准备与学习' },
    { order: '02', title: '构建应用' },
    { order: '03', title: '应用测试' },
    { order: '04', title: '上架' },
    { order: '05', title: '运营增长' },
    { order: '06', title: '商业变现' },
    { order: '07', title: '更多' }
  ];

  @State sections: Section[] = [];
  private getSections() {
    try {
      getContext(this).resourceManager.getRawFileContent("MapData.json", (error: BusinessError, value: Uint8Array) => {
        const textDecoder = util.TextDecoder.create("utf-8");
        const res = textDecoder.decodeToString(value, { stream: false });
        this.sections = JSON.parse(res);
      });
    } catch (error) {
      console.error(`callback getRawFileContent failed, error is ${JSON.stringify(error)}`)
    }
  }
  aboutToAppear(): void {
    this.getSections();
  }

  build() {
    Navigation(this.knowledgeMapPageStack) {
      Scroll() {
        Column() {
          Text('知识地图')
            .fontFamily('HarmonyHeiTi-Bold')
            .fontSize(24)
            .fontColor(Color.Black)
            .textAlign(TextAlign.Start)
            .lineHeight(33)
            .fontWeight(700)
            .width('100%')
          Image($r('app.media.knowledge_map_banner'))
            .width('100%')
            .borderRadius(16)
            .margin({ top: 19, bottom: 16 })
          Text('通过循序渐进的学习路径，无经验和有经验的开发者都可以轻松掌握ArkTS语言声明式开发范式，体验更简洁、更友好的HarmonyOS应用开发旅程。')
            .fontFamily('HarmonyHeiTi')
            .fontSize(14)
            .fontColor('rgba(0,0,0,0.60)')
            .fontWeight(400)
            .textAlign(TextAlign.Start)
            .margin({ bottom: 16 })
          ForEach(this.navBarList, (item: NavBarItemType) => {
            NavBarItem({ navBarItem: item, currentNavBarIndex: this.currentNavBarIndex })
          }, (item: NavBarItemType) => item.order)
        }
        .padding({
          top: 12,
          right: 16,
          bottom: 12,
          left: 16
        })
      }
      .backgroundColor('#F1F3F5')
      .align(Alignment.TopStart)
      // 解决当内容条数不足时，Scroll组件滚动时会出现空白区域的错误效果
      .constraintSize({ minHeight: '100%' })
      // 设置为弹性物理动效。该效果滑动到边缘后可以根据初始速度或通过触摸事件继续滑动一段距离，松手后回弹
      .edgeEffect(EdgeEffect.Spring)
    }
    .hideTitleBar(true)
    .mode(NavigationMode.Stack)
    .navDestination(this.PageMap)
  }
}