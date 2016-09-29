/*****************************************************************
******************************************************************
| |   (_) |__   ___ _ __ __ _| |_(_) ___  _ __       | (_) |_ ___
| |   | | '_ \ / _ \ '__/ _` | __| |/ _ \| '_ \ _____| | | __/ _ \
| |___| | |_) |  __/ | | (_| | |_| | (_) | | | |_____| | | ||  __/
|_____|_|_.__/ \___|_|  \__,_|\__|_|\___/|_| |_|     |_|_|\__\___|
*****************************************************************
************************Created by Satori************************
*****************************************************************/

function toBytesInt32(num) {
    var arr = new ArrayBuffer(4);
    var view = new DataView(arr);
    view.setUint32(0, num, false);
    return arr;
}

function Liberation_Apply() {
    try {
        Memory.protect(ptr(this.address), 4096, 'rw-');
        Memory.writeU32(ptr(this.address), this.data);
        Memory.protect(ptr(this.address), 4096, 'rx');
    }
    catch (e) {
        console.log(e);
    }
}

function Liberation_Reset() {
    Memory.protect(ptr(this.address), 4096, 'rw-');
    Memory.writeByteArray(ptr(this.address), this.original);
    Memory.protect(ptr(this.address), 4096, 'rx');
}

function Patch(address, data, length) {
    this.address = address;
    this.data = data;
    this.length = (arguments.length === 3) ? length : 4; // assume 4 bytes if no length provided
    this.original = Memory.readByteArray(ptr(address), this.length);

    this.Apply = Liberation_Apply;
    this.Reset = Liberation_Reset;
}
