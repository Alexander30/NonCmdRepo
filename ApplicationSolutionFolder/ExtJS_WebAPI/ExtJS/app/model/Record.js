Ext.define('MyApp.model.Record',{
   extend:'Ext.data.Model',
    alias:'model.Record',
    config:{
        fields:[
            {name:'name',type:'string'},
            {name:'amount',type:'int'},
            {name:'currency',type:'string'},
            {name:'description',type:'string'}
        ]
    }
});