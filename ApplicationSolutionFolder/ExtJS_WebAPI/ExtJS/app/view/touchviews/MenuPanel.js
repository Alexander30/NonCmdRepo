Ext.define('MyApp.view.touchviews.MenuPanel',{
    extend:'Ext.tab.Panel',
    requires:[
        'MyApp.view.touchviews.NewRecord'
    ],
    xtype:'menupanel',
    title:'Moj Component',
    layout:'vbox',

    items:[{
        title:'Add Record',
        items:[
            {
               xtype:'newrecord'
            }
        ]},{
            title:'Show records',
        items:[
            {
               // xtype:'showrecords'
            }
        ]
        }, {
            title:'Settings'
        }
    ]
});