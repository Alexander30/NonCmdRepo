Ext.define('MyApp.store.RecordStore',{
   extend:'Ext.data.Store' ,
    alias:'store.RecordStore',
    id:'records',
    xtype:'records',
    requires:[
        'Ext.data.reader.Json',
        'MyApp.model.Record',
        'Ext.data.proxy.Ajax'
    ],
    config:{
        autoLoad: true,
        model: 'MyApp.model.Record',
        proxy:{
            type:'ajax',
            url:'resources/MyData.json',
            reader:{
                type:'json',
                rootProperty:'items'
            }
        }
    }
});