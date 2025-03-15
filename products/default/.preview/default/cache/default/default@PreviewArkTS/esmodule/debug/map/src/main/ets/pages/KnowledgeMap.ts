if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface KnowledgeMap_Params {
}
export class KnowledgeMap extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: KnowledgeMap_Params) {
    }
    updateStateVars(params: KnowledgeMap_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(6:5)", "map");
            Column.padding({
                top: 12,
                right: 16,
                bottom: 12,
                left: 16
            });
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('知识地图');
            Text.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(7:7)", "map");
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
            Image.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(15:7)", "map");
            Image.width('100%');
            Image.borderRadius(16);
            Image.margin({ top: 19, bottom: 8 });
        }, Image);
        Column.pop();
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
