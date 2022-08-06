var window = new Window("palette", "Genshin Overlay", undefined);
var button = window.add("button", undefined, "Apply HP & Status bar");
window.show();

button.onClick = function () {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;

    var HPPreset = File("C:/Users/Jagerente/Documents/Adobe/After Effects 2022/User Presets/[Genshin Academy]/Boss HP.ffx");
    var statusPreset = File("C:/Users/Jagerente/Documents/Adobe/After Effects 2022/User Presets/[Genshin Academy]/Boss Status 1.ffx");

    layers[0].duplicate().applyPreset(HPPreset);
    layers[0].duplicate().applyPreset(statusPreset);
    app.project.activeItem.layers[1].scale.setValue([155, 155]);

    app.project.activeItem.layers[3].moveToBeginning()
    app.project.activeItem.layers[3].moveToBeginning()
};