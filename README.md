
When login
```javascript
const {params} = require('wialon_chain_params')

console.log(
    params
        .login("dasdpassjdoqnoje02093402394j023jm0f")
)

```
Out put
```

{ token: 'dasdpassjdoqnoje02093402394j023jm0f' }

```

When performing search
```javascript

    const {params} = require('wialon_chain_params')
    
    console.log(
        params
            .itemsType.retranslator()
            .propName.itemID()
            .propValueMask.biggerThan()
            .sortType.itemID()
            .propType.chainOfAccounts()
            .force.newSearch()
            .flags.Unit.counters()
            .from.custom(0)
            .to.custom(4294967295)
            .searchItems()
    )

```
Out put
```

{
  spec: {
    itemsType: 'avl_retranslator',
    propName: 'sys_id',
    propValueMask: '>',
    sortType: 'sys_id',
    propType: 'accounttree'
  },
  force: 1,
  flags: '8192',
  from: 0,
  to: 4294967295
}

```