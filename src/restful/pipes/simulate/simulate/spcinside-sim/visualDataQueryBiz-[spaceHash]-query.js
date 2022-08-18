export default {
    queryTableList:(ctx)=>{
        var tables =[];
        for(var i=0;i<24;i++){
            tables.push('name-'+i+'-table');
        }
        return {
            data:tables
        }
    },
    queryTableSchema:(ctx)=>{
        return {
            data:[
                {name:'COLOUM-01',type:'INT'},
                {name:'COLOUM-02',type:'INT'},
                {name:'COLOUM-03',type:'INT'},
                {name:'COLOUM-04',type:'INT'}
            ]
        }
    },
    queryChartDataDataModelProxy:(ctx)=>{
        var categories =['华北','华东','华西','华南','华中','东北']
        function createRandomData(categories){
            return categories.map(item=>{
                return Math.round(Math.random()*800)+200
            })
        }
        return {
            data:{
                "categories": categories,
                "series": [
                    {
                        "name": "价格",
                        "data": createRandomData(categories),
                        "type": "bar"
                    },
                    {
                        "name": "成本",
                        "data": createRandomData(categories),
                        "type": "bar"
                    },
                    {
                        "name": "销量",
                        "data": createRandomData(categories),
                        "type": "bar"
                    }
                ]
            }
        }
    },
    queryChartDataByChartHash:(ctx)=>{
        var categories =['华北','华东','华西','华南','华中','东北']
        function createRandomData(categories){
            return categories.map(item=>{
                return Math.round(Math.random()*800)+200
            })
        }
        return {
            data:{
                "categories": categories,
                "series": [
                    {
                        "name": "价格",
                        "data": createRandomData(categories),
                        "type": "bar"
                    },
                    {
                        "name": "成本",
                        "data": createRandomData(categories),
                        "type": "bar"
                    },
                    {
                        "name": "销量",
                        "data": createRandomData(categories),
                        "type": "bar"
                    }
                ]
            }
        }
    }
}