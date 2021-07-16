const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVATAR = './img/muffin-grey.svg';

const avatarChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photosChooser = document.querySelector('#images');
const photoPreviewContainer = document.querySelector('.ad-form__photo');


const setAvatarPreview = () => {
  avatarChooser.addEventListener('change', () => {
    const file = avatarChooser.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        avatarPreview.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
};

const resetAvatarPreview = () => avatarPreview.src = DEFAULT_AVATAR;

const setPhotosPreview = () => {
  photosChooser.addEventListener('change', () => {
    if (photoPreviewContainer.children.length < 3) {
      const files = [...photosChooser.files].slice(0, 3);

      const photoListFragment = document.createDocumentFragment();

      files.forEach((file) => {
        const fileName = file.name.toLowerCase();
        const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
        if (matches) {

          const reader = new FileReader();
          reader.addEventListener('load', () => {
            const photo = document.createElement('img');
            photo.src = reader.result;
            photoListFragment.appendChild(photo);
            photoPreviewContainer.appendChild(photoListFragment);
          });
          reader.readAsDataURL(file);
        }
      });
    }
  });
};

const resetPhotosPreview = () => photoPreviewContainer.textContent = '';


export { setAvatarPreview, setPhotosPreview, resetAvatarPreview, resetPhotosPreview };
