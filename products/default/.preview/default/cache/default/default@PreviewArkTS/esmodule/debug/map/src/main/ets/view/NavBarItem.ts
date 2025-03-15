if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NavBarItem_Params {
    navBarItem?: NavBarItemType;
}
export interface NavBarItemType {
    order: string;
    title: string;
}
export class NavBarItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__navBarItem = new SynchedPropertyObjectOneWayPU(params.navBarItem, this, "navBarItem");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NavBarItem_Params) {
    }
    updateStateVars(params: NavBarItem_Params) {
        this.__navBarItem.reset(params.navBarItem);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__navBarItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__navBarItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // @State navBarItem: NavBarItemType = {
    //   order: '01',
    //   title: '准备与学习'
    // }
    private __navBarItem: SynchedPropertySimpleOneWayPU<NavBarItemType>;
    get navBarItem() {
        return this.__navBarItem.get();
    }
    set navBarItem(newValue: NavBarItemType) {
        this.__navBarItem.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/map/src/main/ets/view/NavBarItem.ets(15:5)", "map");
            Row.width('100%');
            Row.height(48);
            Row.borderRadius(16);
            Row.alignItems(VerticalAlign.Center);
            Row.padding({ left: 12, right: 12 });
            Row.backgroundColor('#F1F3F5');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.navBarItem.order);
            Text.debugLine("features/map/src/main/ets/view/NavBarItem.ets(16:7)", "map");
            Text.margin({ right: 6 });
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.fontSize(21);
            Text.fontColor('#182431');
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(22);
            Text.fontWeight(700);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.navBarItem.title);
            Text.debugLine("features/map/src/main/ets/view/NavBarItem.ets(24:7)", "map");
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.fontSize(16);
            Text.fontColor('#182431');
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(22);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/map/src/main/ets/view/NavBarItem.ets(31:7)", "map");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777258, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
            Image.debugLine("features/map/src/main/ets/view/NavBarItem.ets(32:7)", "map");
            Image.width(12);
            Image.height(24);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
