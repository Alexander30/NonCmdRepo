//var o=Ext.create('MyApp.view.main.Mammal',{name:'Creature'});
Ext.define('MyApp.view.main.MyPanel',{
    extend:'Ext.panel.Panel',

    xtype:'mypanel',
    controller:'mypanel',//MyPanelController.js
    border:true,
    defaults:{
       xtype:'button',
       height:60,
       width:70,
       style:'background: red'
    },
    items:[{
        text:'CLick me',
        listeners:{
            click:'onclick'
        }
    },{
        text:'Click me 2',
        handler:'onclick'
    }]
    /*,
    init:function(){
        alert('alert from launchMyPanel');
    }*/

});
