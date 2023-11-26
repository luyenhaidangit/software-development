public TeacherMapper()
    {
        CreateMap<Teacher, TeacherDto>()
        .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.User.Name))
        .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.User.Email))
        .ForMember(dest => dest.AvatarUrl, opt => opt.MapFrom(src => SystemConfig.BaseUrl + src.User.AvatarUrl))
        .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => PhoneHelper.FormatPhoneNumber(src.User.PhoneNumber)))
        .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.User.Status));
    }

var itemsMapper = _mapper.Map<List<TeacherDto>>(items);
var banner = _mapper.Map<Banner>(request);
