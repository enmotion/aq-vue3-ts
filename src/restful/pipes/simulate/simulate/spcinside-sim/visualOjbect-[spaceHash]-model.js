const datamodcat = {
  modelTree: function (ctx) {
    return {
      data: [
        {
          'id': '1473177711173033986',
          'parentId': '0',
          'children': [
            {
              'id': '1473179044428980226',
              'parentId': '1473177711173033986',
              'children': [
                {
                  'id': '1473179647632809985',
                  'parentId': '1473179044428980226',
                  'hasChildren': false,
                  'name': 'm111',
                  'key': '1473179647632809985',
                  'value': '1473179647632809985'
                },
                {
                  'id': '1473179665597014017',
                  'parentId': '1473179044428980226',
                  'hasChildren': false,
                  'name': 'm112',
                  'key': '1473179665597014017',
                  'value': '1473179665597014017'
                }
              ],
              'hasChildren': true,
              'name': 'm11',
              'key': '1473179044428980226',
              'value': '1473179044428980226'
            },
            {
              'id': '1473179068944687105',
              'parentId': '1473177711173033986',
              'hasChildren': false,
              'name': 'm12',
              'key': '1473179068944687105',
              'value': '1473179068944687105'
            },
            {
              'id': '1473179103015018497',
              'parentId': '1473177711173033986',
              'hasChildren': false,
              'name': 'm13',
              'key': '1473179103015018497',
              'value': '1473179103015018497'
            }
          ],
          'hasChildren': true,
          'name': '目录层级01-01',
          'key': '1473177711173033986',
          'value': '1473177711173033986'
        },
        {
          'id': '1473179439637274626',
          'parentId': '0',
          'children': [
            {
              'id': '1473179521837244418',
              'parentId': '1473179439637274626',
              'hasChildren': false,
              'name': 'm21',
              'key': '1473179521837244418',
              'value': '1473179521837244418'
            },
            {
              'id': '1473179542422888450',
              'parentId': '1473179439637274626',
              'hasChildren': false,
              'name': 'm22',
              'key': '1473179542422888450',
              'value': '1473179542422888450'
            }
          ],
          'hasChildren': true,
          'name': '目录层级01-02',
          'key': '1473179439637274626',
          'value': '1473179439637274626'
        }
      ]
    }
  },
  modelGetModelWithCategory (ctx) {
    return {
      data: [
        {
          hasChildren: false,
          id: '1476473406089195522',
          modelHash: '',
          parentId: 0,
          title: 'MOD-SPACE-002',
          type: 'c',
          children: [
            {
              hasChildren: false,
              id: '1476818891526111233',
              modelHash: 'mdl_5wzs2-he22kb05-109z9',
              parentId: '1476473406089195522',
              title: '测试模型/MOD-SPACE-00',
              type: 'm'
            },
            {
              hasChildren: false,
              id: '1478291754628186113',
              modelHash: 'mdl_89579-4oe45851-8i8b1',
              parentId: '1476473406089195522',
              title: 'MOD-SPACE-0022/001',
              type: 'm'
            },
            {
              hasChildren: false,
              id: '1478640647652081665',
              modelHash: 'mdl_t2660-hn38o8lr-onq46',
              parentId: '1476473406089195522',
              title: '测试模型/MOD-SPACE-00-copy',
              type: 'm'
            }
          ]
        },
        {
          id: '1476473525098377217',
          modelHash: '',
          parentId: 0,
          title: 'MOD-SPACE-01',
          type: 'c',
          children: [
            {
              hasChildren: false,
              id: '1476850978576662529',
              modelHash: 'mdl_9o2u8-03o5h745-71u4j',
              parentId: '1476473525098377217',
              title: '2222-copy',
              type: 'm'
            },
            {
              hasChildren: false,
              id: '1476814391067279362',
              modelHash: 'mdl_40k58-9229304j-58gc1',
              parentId: '1476473525098377217',
              title: '123',
              type: 'm'
            },
            {
              hasChildren: false,
              id: '1476843517966811138',
              modelHash: '',
              parentId: '1476473525098377217',
              title: 'MOD-SPACE-01-01',
              type: 'c'
            }
          ]
        }
      ]
    }
  },
  modelDetail (ctx) {
    return {
      data: {
        'spaceHash': 's_4oc3g-g0jai086-0dkdn',
        'modelHash': 'mdl_5wzs2-he22kb05-109z9',
        'name': '测试模型/MOD-SPACE-00',
        'categoryId': '1476473406089195522',
        'sourceHashes': 'db_8c7i9-304a6qr5-814bb',
        'configInfo': {
          'sourceHashes': [],
          'tables': [{
            'tableId': 'TB000000kzs8h5as',
            'tableName': 'test_sale_order',
            'customTableHash': '',
            'level': 1,
            'sourceHash': 'db_8c7i9-304a6qr5-814bb',
            'join': {
              'type': 'all',
              'leftTableId': '',
              'on': []
            }
          }, {
            'tableId': 'TB000000kzs8h6lo',
            'tableName': 'test_sale_customer_type',
            'customTableHash': '',
            'level': 2,
            'sourceHash': 'db_8c7i9-304a6qr5-814bb',
            'join': {
              'type': 'left',
              'leftTableId': 'TB000000kzs8h5as',
              'on': [{
                'leftField': 'customer_type_code',
                'rightField': 'customer_type_code'
              }]
            }
          }],
          'dimensions': {
            'FD000000kzsc0v8h': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8h',
              'tableId': 'TB000000kzs8h5as',
              'field': 'order_no',
              'calculated': false,
              'expression': '',
              'alias': 'order_no',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8j': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8j',
              'tableId': 'TB000000kzs8h5as',
              'field': 'district',
              'calculated': false,
              'expression': '',
              'alias': 'district',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8l': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8l',
              'tableId': 'TB000000kzs8h5as',
              'field': 'province',
              'calculated': false,
              'expression': '',
              'alias': 'province',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8n': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8n',
              'tableId': 'TB000000kzs8h5as',
              'field': 'city',
              'calculated': false,
              'expression': '',
              'alias': 'city',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8p': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8p',
              'tableId': 'TB000000kzs8h5as',
              'field': 'product_name',
              'calculated': false,
              'expression': '',
              'alias': 'product_name',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8r': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8r',
              'tableId': 'TB000000kzs8h5as',
              'field': 'product_category',
              'calculated': false,
              'expression': '',
              'alias': 'product_category',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8t': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8t',
              'tableId': 'TB000000kzs8h5as',
              'field': 'child_category',
              'calculated': false,
              'expression': '',
              'alias': 'child_category',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8v': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8v',
              'tableId': 'TB000000kzs8h5as',
              'field': 'customer_name',
              'calculated': false,
              'expression': '',
              'alias': 'customer_name',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8x': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8x',
              'tableId': 'TB000000kzs8h5as',
              'field': 'delivery_time',
              'calculated': false,
              'expression': '',
              'alias': 'delivery_time',
              'dataType': 'datetime',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v8z': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v8z',
              'tableId': 'TB000000kzs8h5as',
              'field': 'customer_type_code',
              'calculated': false,
              'expression': '',
              'alias': 'customer_type_code',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': true,
              'aggregated': false
            },
            'FD000000kzsc0v91': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v91',
              'tableId': 'TB000000kzs8h5as',
              'field': 'create_time',
              'calculated': false,
              'expression': '',
              'alias': 'create_time',
              'dataType': 'datetime',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v93': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v93',
              'tableId': 'TB000000kzs8h5as',
              'field': 'delivery_method',
              'calculated': false,
              'expression': '',
              'alias': 'delivery_method',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v95': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v95',
              'tableId': 'TB000000kzs8h5as',
              'field': 'target_city',
              'calculated': false,
              'expression': '',
              'alias': 'target_city',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0v99': {
              'type': 'dimension',
              'fieldId': 'FD000000kzsc0v99',
              'tableId': 'TB000000kzs8h6lo',
              'field': 'customer_type_name',
              'calculated': false,
              'expression': '',
              'alias': 'customer_type_name',
              'dataType': 'varchar',
              'dataTypeInDB': '',
              'defaultAggregator': '',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': true,
              'aggregated': false
            }
          },
          'measures': {
            'FD000000kzsc0vae': {
              'type': 'measure',
              'fieldId': 'FD000000kzsc0vae',
              'tableId': 'TB000000kzs8h5as',
              'field': 'id',
              'calculated': false,
              'expression': '',
              'alias': 'id',
              'dataType': 'bigint',
              'dataTypeInDB': '',
              'defaultAggregator': 'avg',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0vag': {
              'type': 'measure',
              'fieldId': 'FD000000kzsc0vag',
              'tableId': 'TB000000kzs8h5as',
              'field': 'num',
              'calculated': false,
              'expression': '',
              'alias': 'num',
              'dataType': 'int',
              'dataTypeInDB': '',
              'defaultAggregator': 'sum',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0vai': {
              'type': 'measure',
              'fieldId': 'FD000000kzsc0vai',
              'tableId': 'TB000000kzs8h5as',
              'field': 'price',
              'calculated': false,
              'expression': '',
              'alias': 'price',
              'dataType': 'double',
              'dataTypeInDB': '',
              'defaultAggregator': 'max',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            },
            'FD000000kzsc0vak': {
              'type': 'measure',
              'fieldId': 'FD000000kzsc0vak',
              'tableId': 'TB000000kzs8h5as',
              'field': 'cost',
              'calculated': false,
              'expression': '',
              'alias': 'cost',
              'dataType': 'double',
              'dataTypeInDB': '',
              'defaultAggregator': 'min',
              'hierarchyId': '',
              'pathIds': [],
              'convert': {},
              'format': {},
              'hidden': false,
              'aggregated': false
            }
          },
          'dimensionCategory': [{
            'type': 'category',
            'categoryId': 'TB000000kzs8h5as',
            'name': 'test_sale_order',
            'nodes': ['FD000000kzsc0v8h', 'FD000000kzsc0v8j', 'FD000000kzsc0v8l', 'FD000000kzsc0v8n', 'FD000000kzsc0v8p', 'FD000000kzsc0v8r', 'FD000000kzsc0v8t', 'FD000000kzsc0v8v', 'FD000000kzsc0v8x', 'FD000000kzsc0v8z', 'FD000000kzsc0v91', 'FD000000kzsc0v93', 'FD000000kzsc0v95']
          }, {
            'type': 'category',
            'categoryId': 'TB000000kzs8h6lo',
            'name': 'test_sale_customer_type',
            'nodes': ['FD000000kzsc0v8z', 'FD000000kzsc0v99']
          }],
          'measureCategory': [{
            'type': 'category',
            'categoryId': 'TB000000kzs8h5as',
            'name': 'test_sale_order',
            'nodes': ['FD000000kzsc0vae', 'FD000000kzsc0vag', 'FD000000kzsc0vai', 'FD000000kzsc0vak']
          }, {
            'type': 'category',
            'categoryId': 'TB000000kzs8h6lo',
            'name': 'test_sale_customer_type',
            'nodes': ['FD000000kzsc0vae']
          }],
          'filters': {
            'composite': {
              'connect': '',
              'conditions': [],
              'composites': []
            }
          },
          'limits': {
            'method': '',
            'dynamicLimitRule': '',
            'fixedLimits': [],
            'dynamicLimits': []
          },
          'fuzzy': {
            'enabled': false,
            'items': []
          }
        },
        'description': '数据模型描述文字内容测试模型/MOD-SPACE-00',
        'createUser': '1123598821738675201',
        'createTime': '2021-12-31 15:33:56'
      }
    }
  },
  modelCategoryItems (ctx) {
    return {
      data: [
        {
          ategoryId: '1476843517966811138',
          createUserName: '',
          isCategory: 1,
          modelHash: '',
          name: 'MOD-SPACE-01-01',
          spaceHash: 's_4oc3g-g0jai086-0dkdn'
        },
        {
          categoryId: '',
          createUserName: '',
          isCategory: 0,
          modelHash: 'mdl_vz026-ivw04509-s1hus',
          name: '2222-copy',
          spaceHash: 's_4oc3g-g0jai086-0dkdn'
        }
      ]
    }
  },
  fileCategoryGetCategoryChildren (ctx) {
    return {
      data: [
        {
          'id': '1503911626433122306',
          'parentId': 0,
          'alias': '背景图1',
          'childrenSize': 3,
          'type': 1,
          'link': ''
        },
        {
          'id': '1504345547901792258',
          'parentId': 0,
          'alias': '背景图2',
          'childrenSize': 0,
          'type': 1,
          'link': ''
        },
        {
          'id': '1504345692915658753',
          'parentId': 0,
          'alias': '背景图3',
          'childrenSize': 0,
          'type': 1,
          'link': ''
        },
        {
          'id': '1504345708740767745',
          'parentId': 0,
          'alias': '背景图4',
          'childrenSize': 0,
          'type': 1,
          'link': ''
        }
      ]
    }
  }
}
export default datamodcat
