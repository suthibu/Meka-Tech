ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ae2:calculation_processor_press'), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'ae2:certus_quartz_crystal',
          B: 'minecraft:iron_block'
        }
      )
      event.shaped(
        Item.of('ae2:engineering_processor_press'), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:diamond',
          B: 'minecraft:iron_block'
        }
      )
      event.shaped(
        Item.of('ae2:logic_processor_press'), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'minecraft:gold_ingot',
          B: 'minecraft:iron_block'
        }
      )
      event.shaped(
        Item.of('ae2:silicon_press'), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'ae2:silicon',
          B: 'minecraft:iron_block'
        }
      )
})