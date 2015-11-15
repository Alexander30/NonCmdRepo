Ext.application({
    name:'MyApp',
    requires:[
        'MyApp.view.main.MyPanel',
        'MyApp.view.main.MyPanelController',
    ],
    stores:['RecordStore'],
    models:['Record'],
    views:[
        'main.Main',
        'touchviews.MenuPanel'
    ],
    mainView:'MyApp.view.main.Main',

    launch:function(){
        //Ext.create('MyApp.store.RecordStore');
    }
})