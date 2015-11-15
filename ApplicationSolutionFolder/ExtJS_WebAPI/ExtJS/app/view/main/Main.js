Ext.define('MyApp.view.main.Main',{
    extend:Ext.Container,
    requires:[
        'MyApp.view.main.MyPanel',
        'MyApp.view.main.MyPanelController',
        'MyApp.view.touchviews.MenuPanel'
    ],
    items:[
        {
           // xtype:'mypanel',//MyPanel.js
            xtype:'menupanel',//MenuPanel.js
            title: 'Moj panel',
            width:300
        },
        {
            xtype:'button',
            text:'Click me'
        }
    ]



});