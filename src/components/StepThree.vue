<template>
    <div class="stepThree">
        <p class="title text-center mB0">Update Profile Picture</p>
        <p class="subtitle text-center mT5">We wanna know you more!</p>
        
        <label class="imgUpload" for="imgUpload">
            <input class="hide" id="imgUpload" type="file" multiple @change="onFileSelected" accept="image/*">
            <div>
                <i class="fas fa-images fa-3x imgIcon"></i>
                <p class="form m0 mB5 color-default">UPLOAD UP TO 3 PHOTHS</p>
                <p class="label m0 color-default">MAX SIZE: 150*150px</p>
            </div>
        </label>

        <div v-if="image.length > 0 && !validate" class="w100 mT15">
            <div class="sizeAlert text-center"><span class="label"><i class="fas fa-exclamation-triangle mR20"></i>ONE FILE IS OVER THE MAXIMUM SIZE</span></div>
        </div>

        <div class="flex-box mT15">
            <div v-for="(img,i) in image" :key="i" class="imgItemWrapper">
                <div class="imgWrapper">
                    <img :src="img.dataUrl" class="w100">
                    <div class="imgDeleteBtn" @click="deleteImg(i)"><i class="fas fa-trash-alt"></i></div>
                </div>
                <p v-if="!img.valid" class="label imgWarning">This image({{ img.width }}x{{ img.height }}) is Over Max Size!</p>
            </div>
        </div>

        <button @click="validateBeforeNextStep" class="w100 mT30 button-main" :disabled="!validate">SUBMIT & NEXT</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedFile: [], // FileLists
            image: [], // 縮圖用 URL
            isLoadingImg: false,
        }
    },
    computed: {
        validate() {
            return this.image.length > 0 ? this.image.every(img => {
                return img.valid == true;
            }) : false;
        },
    },
    watch: {
    },
    methods: {
        onFileSelected(e) {
            if((this.image.length + e.target.files.length) <= 3) {
                this.selectedFile = e.target.files;
                // this.image = [];
                for(let i = 0; i < this.selectedFile.length; i++) {
                    this.getFileURL(this.selectedFile[i]);
                }
            } else {
                alert('You can at most upload 3 images!');
            }
        },
        getFileURL: function (file) {
            var _URL = window.URL || window.webkitURL;
            var self = this;
            let img;
            img = new Image();
            img.src = _URL.createObjectURL(file);
            img.onload = function () {
                let width = this.width;
                let height = this.height;
                let valid = width <= 150 && height <= 150;
                self.image.push({
                    dataUrl: img.src,
                    width,
                    height,
                    valid
                })
            }
        },
        deleteImg(index) {
            this.image.splice(index, 1);
        },
        validateBeforeNextStep() {
            this.$emit('next-step');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_color.scss";

.imgUpload {
  cursor: pointer;
  display: block;
  border: 2px solid black;
  border-radius: 5px;
  padding: 50px;
  transition: all 250ms ease-out;
  * {
    transition: all 250ms ease-out;
  }
  &:hover {
    background-color: rgba($secondary-color, 0.3);
    border-color: lighten($main-color, 0.5);
    * {
      color: lighten($main-color, 0.5);
    }
  }
}

.sizeAlert {
  padding: 10px 20px;
  background-color: $warning-color;
  color: white;
  border-radius: 5px;
}

.imgItemWrapper {
  flex: 0 1 33%;
  &:not(:first-child) {
    margin-left: 20px;
  }
}

.imgWrapper {
  height: 140px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  > img {
    border-radius: 5px;
  }
  &:hover {
    .imgDeleteBtn {
      display: block;
    }
  }
}
.imgIcon {
  float: left;
  margin-right: 20px;
  color: $default-color;
}

.imgWarning {
  border-radius: 5px;
  padding: 10px;
  color: white;
  background-color: $warning-color;
}

.imgDeleteBtn {
  display: none;
  cursor: pointer;
  position: absolute;
  background-color: rgba($main-color, 0.8);
  color: white;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  transition: all 200ms ease-out;
  &:hover {
    background-color: $main-color;
  }
}
</style>
