Ext.define('MyApp.view.touchviews.ShowRecords',{
   extend:'Ext.panel.Panel',
   title:'Zaznamy',
   id:'showrecords',
   xtype: 'showrecords',
   requires:[
     /* 'Ext.form.FieldSet',
      'Ext.field.Password',
      'Ext.SegmentedButton',
       'Ext.List',*/
       'MyApp.store.RecordStore'
   ],
   config:{
      layout:'vbox',
      items:[
         {
            xtype:'container',
            layout:'fit',
            flex:10,
            items:[{
               xtype:'gridpanel',
               title:'Your Records',
               width:'100%',
               height:'100%',
               store:'records',
               columns:[
                  {
                     text:'1Col',
                     dataIndex:'name'
                  },{
                     text:'2Col',
                     dataIndex:'amount'
                  },{
                     text:'3Col',
                     dataIndex: 'currency'
                  },{
                     text:"4Col",
                     dataIndex: 'description'
                  }
               ]
            }]
         }
      ]
   }
});