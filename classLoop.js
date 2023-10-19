// casenya:
// class kendaraan (bisa motor, mobil, kapal dll)
// class perawatan kendaraan
// kasusnya: ada beberapa kendaraan yang ingin melakukan perawatan


// super class / parent class
class Kendaraan {
    constructor(merk, color) {
        this.merk = merk;
        this.color = color;
        this.engineActive = false;
    }


    startEngine() {
        console.log(`Mesin dinyalakan`);
        console.log(`Active Engine: ${this.engineActive !== false ? 'Active' : 'Inactive'}`);
    }

    info() {
        console.log(`Kendaraan dengan merk ${this.merk}, warna ${this.color} telah dinyalakan!`);
    }
}


// kendaraan roda dua
class Motor extends Kendaraan {
    constructor(merk, color, roda) {
        // akses constructor milik parent class
        super(merk, color);
        this.roda = roda;
    }

    // melakukan method overriding
    info() {
        super.info();
        console.log(`Kendaraan dengan merk ${this.merk} dan warna ${this.color} dengan tipe roda ${this.roda} telah dinyalakan`)
    }
}

// kendaraan bermotor ingin melakukan perawatan
/**
 * buat dulu class untuk melakukan pemeriksaan dengan nama class perawatan
 */

class ServiceKendaraanBermotor {
    serviceMotor(services) {
        services.forEach(service => {
            console.log(`Kendaraan dengan spesifikasi:
            \n- Merk ${service.merk} \n- Warna ${service.color} \n- Tipe Roda ${service.roda} \n- Status: Sedang melakukan perawatan`);
        })
    }
}

// implementasi
const motorSahrudin = new Motor('Honda', 'Putih', 2);
const motorFia = new Motor('Honda Beat', 'Hitam', 2);
const motorAlfi = new Motor('Honda Vixion', 'Blue', 2);
motorSahrudin.startEngine()
motorFia.startEngine()
motorAlfi.startEngine()

motorSahrudin.info();
motorFia.info();
motorAlfi.info();

// melakukan perawatan
const tempatService = new ServiceKendaraanBermotor();
tempatService.serviceMotor([motorSahrudin, motorFia, motorAlfi]);
