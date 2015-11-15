Ext.define('MyApp.view.main.MyPanelController',{
    extend:'Ext.app.ViewController',
    alias:'controller.mypanel',
    onclick:function(button){
        alert('clicked me');
    }
});