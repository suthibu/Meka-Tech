ServerEvents.recipes(event => {
      event.recipes.mekanism.combining("ae2:calculation_processor_press","minecraft:iron_block","8x ae2:certus_quartz_crystal")
      event.recipes.mekanism.combining("ae2:engineering_processor_press","minecraft:iron_block","8x minecraft:diamond")
      event.recipes.mekanism.combining("ae2:logic_processor_press","minecraft:iron_block","8x minecraft:gold_ingot")
      event.recipes.mekanism.combining("ae2:silicon_press", "minecraft:iron_block", "8x ae2:silicon")
      event.recipes.mekanism.enriching("ae2:certus_quartz_crystal","16x minecraft:quartz_block")
})