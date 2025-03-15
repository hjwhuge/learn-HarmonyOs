if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface KnowledgeMap_Params {
    navBarList?: NavBarItemType[];
    sections?: Section[];
}
import type { NavBarItemType } from "@bundle:com.huawei.quickstart/default@map/ets/view/NavBarItem";
import { NavBarItem } from "@bundle:com.huawei.quickstart/default@map/ets/view/NavBarItem";
import type { Section } from '../view/KnowledgeMapContent';
import util from "@ohos:util";
import type { BusinessError } from "@ohos:base";
export class KnowledgeMap extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__navBarList = new ObservedPropertyObjectPU([
            { order: '01', title: '准备与学习' },
            { order: '02', title: '构建应用' },
            { order: '03', title: '应用测试' },
            { order: '04', title: '上架' },
            { order: '05', title: '运营增长' },
            { order: '06', title: '商业变现' },
            { order: '07', title: '更多' }
        ], this, "navBarList");
        this.__sections = new ObservedPropertyObjectPU([], this, "sections");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: KnowledgeMap_Params) {
        if (params.navBarList !== undefined) {
            this.navBarList = params.navBarList;
        }
        if (params.sections !== undefined) {
            this.sections = params.sections;
        }
    }
    updateStateVars(params: KnowledgeMap_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__navBarList.purgeDependencyOnElmtId(rmElmtId);
        this.__sections.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__navBarList.aboutToBeDeleted();
        this.__sections.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __navBarList: ObservedPropertyObjectPU<NavBarItemType[]>;
    get navBarList() {
        return this.__navBarList.get();
    }
    set navBarList(newValue: NavBarItemType[]) {
        this.__navBarList.set(newValue);
    }
    private __sections: ObservedPropertyObjectPU<Section[]>;
    get sections() {
        return this.__sections.get();
    }
    set sections(newValue: Section[]) {
        this.__sections.set(newValue);
    }
    private getSections() {
        // getContext(this).resourceManager.getRawFileContent('MapData.json').then(value => {
        //   this.section = JSON.parse(bufferToString(value)) as Section[];
        // })
        try {
            getContext(this).resourceManager.getRawFileContent("MapData.json", (error: BusinessError, value: Uint8Array) => {
                const textDecoder = util.TextDecoder.create("utf-8");
                const res = textDecoder.decodeWithStream(value, { stream: false });
                this.sections = JSON.parse(res);
            });
        }
        catch (error) {
            console.error(`callback getRawFileContent failed, error is ${JSON.stringify(error)}`);
        }
    }
    aboutToAppear(): void {
        this.getSections();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(43:5)", "map");
            Scroll.backgroundColor('#F1F3F5');
            Scroll.align(Alignment.TopStart);
            Scroll.constraintSize({ minHeight: '100%' });
            Scroll.edgeEffect(EdgeEffect.Spring);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(44:7)", "map");
            Column.padding({
                top: 12,
                right: 16,
                bottom: 12,
                left: 16
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('知识地图');
            Text.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(45:9)", "map");
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.fontSize(24);
            Text.fontColor(Color.Black);
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(33);
            Text.fontWeight(700);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777257, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
            Image.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(53:9)", "map");
            Image.width('100%');
            Image.borderRadius(16);
            Image.margin({ top: 19, bottom: 8 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('通过循序渐进的学习路径，无经验和有经验的开发者都可以轻松掌握ArkTS语言声明式开发范式，体验更简洁、更友好的HarmonyOS应用开发旅程。');
            Text.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(57:9)", "map");
            Text.fontFamily('HarmonyHeiTi');
            Text.fontSize(14);
            Text.fontColor('rgba(0,0,0,0.60)');
            Text.fontWeight(400);
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new NavBarItem(this, { navBarItem: item }, undefined, elmtId, () => { }, { page: "features/map/src/main/ets/pages/KnowledgeMap.ets", line: 64, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    navBarItem: item
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                navBarItem: item
                            });
                        }
                    }, { name: "NavBarItem" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.navBarList, forEachItemGenFunction, (item: NavBarItemType) => item.order, false, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "KnowledgeMap", new KnowledgeMap(undefined, {}));
    previewComponent();
}
else {
}
