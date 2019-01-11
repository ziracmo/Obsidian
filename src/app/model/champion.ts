export class Champion {
    allytips: string[];
    blurp: string;
    enemytips: string [];
    id: string;
    image: ChampionImage;
    info: ChampionInfo;
    key: string;
    lore: string;
    name: string;
    partype: string;
    passive: ChampionPassive;
    skins: any; // TODO
    spells: any; // TODO
    stats: ChampionStats;
    tags: string[];
    title: string;
    version: string;
}

class ChampionPassive {
    description: string;
    image: any; // TODO
    name: string;
}

class ChampionImage {
    full: string;
    group: string;
    h: number;
    sprite: string;
    w: number;
    x: number;
    y: number;
}

class ChampionStats {
    armor: number;
    armorperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackrange: number;
    attackspeed: number;
    attackspeedperlevel: number;
    crit: number;
    critperlevel: number;
    hp: number;
    hpperlevel: number;
    hpregen: number;
    hpregenperlevel: number;
    movespeed: number;
    mp: number;
    mpperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
}

class ChampionInfo {
    attack: number;
    defense: number;
    difficulty: number;
    magic: number;
}
