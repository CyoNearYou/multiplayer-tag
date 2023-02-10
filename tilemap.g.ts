// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000c000000000000000000000000000000000000000000000000000010110000000000001301011400000000000000000000000000110000060708090000001400100f1100000e001300000b010101010c0000000003020d0d05040000000000000000000000000a0a0a0a0a0a0a0a0a0a00000000001200000000`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . 2 2 2 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . 2 
. . 2 2 2 2 2 2 . . 
. . . . 2 2 . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles22,sprites.builtin.forestTiles13,sprites.builtin.forestTiles17,sprites.builtin.forestTiles19,sprites.builtin.forestTiles15,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles10,sprites.swamp.swampTile3,sprites.swamp.swampTile1,sprites.swamp.swampTile0,sprites.swamp.swampTile2,myTiles.tile6,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "p1spawn3":
            case "tile1":return tile1;
            case "p2spawn":
            case "tile2":return tile2;
            case "p3spawn":
            case "tile3":return tile3;
            case "p4spawn":
            case "tile4":return tile4;
            case "thing":
            case "tile5":return tile5;
            case "deathtrap":
            case "tile6":return tile6;
            case "myTile":
            case "tile7":return tile7;
            case "poo":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
