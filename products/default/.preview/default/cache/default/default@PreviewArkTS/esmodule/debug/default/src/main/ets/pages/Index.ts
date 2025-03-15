if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    currentIndex?: number;
}
import { QuickStartPage } from "@bundle:com.huawei.quickstart/default@quickstart/Index";
import { CourseLearning } from "@bundle:com.huawei.quickstart/default@learning/Index";
import { KnowledgeMap } from "@bundle:com.huawei.quickstart/default@map/Index";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    tabBarBuilder(title: string, targetIndex: number, selectedIcon: Resource, unselectIcon: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/default/src/main/ets/pages/Index.ets(12:5)", "default");
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex === targetIndex ? selectedIcon : unselectIcon);
            Image.debugLine("products/default/src/main/ets/pages/Index.ets(13:7)", "default");
            Image.width(24);
            Image.height(24);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("products/default/src/main/ets/pages/Index.ets(16:7)", "default");
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.fontSize(10);
            Text.fontColor(this.currentIndex === targetIndex ? '#0A59F7' : 'rgba(0,0,0,0.60)');
            Text.textAlign(TextAlign.Center);
            Text.lineHeight(14);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.End });
            Tabs.debugLine("products/default/src/main/ets/pages/Index.ets(31:5)", "default");
            Tabs.scrollable(false);
            Tabs.vertical(false);
            Tabs.divider({
                strokeWidth: 0.5,
                color: '#0D182431'
            });
            Tabs.backgroundColor('#F1F3F5');
            Tabs.padding({ top: 36, bottom: 28 });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new QuickStartPage(this, {}, undefined, elmtId, () => { }, { page: "products/default/src/main/ets/pages/Index.ets", line: 33, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "QuickStartPage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBarBuilder.call(this, '快速入门', 0, { "id": 16777265, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" }, { "id": 16777264, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
                } });
            TabContent.debugLine("products/default/src/main/ets/pages/Index.ets(32:7)", "default");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBarBuilder.call(this, '课程学习', 1, { "id": 16777268, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" }, { "id": 16777266, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
                } });
            TabContent.debugLine("products/default/src/main/ets/pages/Index.ets(37:7)", "default");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new KnowledgeMap(this, {}, undefined, elmtId, () => { }, { page: "products/default/src/main/ets/pages/Index.ets", line: 43, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "KnowledgeMap" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBarBuilder.call(this, '知识地图', 2, { "id": 16777269, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" }, { "id": 16777267, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
                } });
            TabContent.debugLine("products/default/src/main/ets/pages/Index.ets(42:7)", "default");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.huawei.quickstart", moduleName: "default", pagePath: "pages/Index", pageFullPath: "products/default/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
