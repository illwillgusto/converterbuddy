let listQuantities;
let optionQuantity;
let inputTop;
let inputBottom;
let quantity;
let deQuantityId = 'length';
let quantities = [{
    name: 'Length',
    id: 'length',
    defUnitIndex: 1,
    units: [
        ["kilometer", 1000],
        ["meter", 1],
        ["centimeter", 0.01],
        ["millimeter", 0.001],
        ["micrometer", 1e-6],
        ["nanometer", 1e-9],
        ["picometer", 1e-12],
        ["mile", 1609.344],
        ["nautical mile", 1852],
        ["yard", 0.9144],
        ["feet", 0.3048],
        ["inch",0.0254]
    ]
},
{
    name: 'Mass',
    id: 'mass',
    defUnitIndex: 0,
    units: [
        ["kilograms, 1"],
        ["gram", 1e-3],
        ["milligram", 1e-6],
        ["nanogram", 1e-12],
        ["ton", 1000],
        ["quintal", 100],
        ["pound", 0.45359237]
    ]
},
{
    name: 'Time',
    id: 'time',
    defUnitIndex: 7,
    units: [
        ["millennium", 31536000000],
        ["century", 3153600000],
        ["decade", 315360000],
        ["windu", 252288000],
        ["year (365 days)", 31536000],
        ["month (30 days)", 2628000],
        ["week", 604800],
        ["day", 86400],
        ["hour", 3600],
        ["minute", 60],
        ["second", 1],
        ["millisecond", 1e-3],
        ["microsecond", 1e-6],
        ["nanosecond", 1e-9],
        ["picosecond", 1e-12],
    ]
},
{
    name: 'Volume',
    id: 'volume',
    defUnitIndex: 5,
    units: [
        ["cubic kilometer", 1e12],
        ["cubic meter kubik", 1e3],
        ["cubic decimete kubik", 1],
        ["cubic millimeter kubik", 1e-6],
        ["kilometer", 1e3],
        ["liter", 1],
        ["milliliter", 1e-3],
        ["cubic yard kubik", 764.554857984],
        ["cubic mil kubik", 4.168181825e12],
        ["cubic inci kubik", 0.016387064],
        ["cubic kaki kubik", 28.316846592],
        ["gallon", 3.785411784],
        ["cup", 0.2365882365],
        ["tablespoon", 0.01478676478125],
        ["teaspoon", 0.00492892159375],
    ]
},
{
    name: 'Digital Storage',
    id: 'digital storage',
    defUnitIndex: 1,
    units: [
        ["bits", 0.125],
        ["bytes", 1],
        ["kilobits", 128],
        ["kilobytes", 1024],
        ["megabits", 131072],
        ["megabytes", 1048576],
        ["gigabits", 134217728],
        ["gigabytes", 1073741824],
        ["terabits", 137438953472],
        ["terabytes", 1099511627776],
        ["petabits", 140737488355328],
        ["petabytes", 1125899906842624],
        ["exabits", 144115188075855872],
        ["exabytes", 1152921504606846976],
    ]
},
]

