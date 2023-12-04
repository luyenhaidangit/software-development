- File: CyberTech-vi.xml
- @L("")
- Navigation: AppNavigationProvider.cs

.AddItem(new MenuItemDefinition(
                            AppPageNames.Common.BienBanKiemTra,
                            L("QuanLyBienBanKiemTra"),
                            icon: "flaticon-folder-1",
                            permissionDependency: new SimplePermissionDependency(AppPermissions.Pages_Administration_Host_BienBanKiemTra)
                            )
                        .AddItem(new MenuItemDefinition(
                                AppPageNames.Common.NhapBienBanKiemTraDLT,
                                L("NhapBienBanKiemTraDLT"),
                                url: "App/QuanLyBienBanKiemTra/ChiTiet",
                                icon: "flaticon-folder-1",
                                permissionDependency: new SimplePermissionDependency(AppPermissions.Pages_Administration_Host_BienBanKiemTra)
                                )
                            )
                        .AddItem(new MenuItemDefinition(
                                AppPageNames.Common.DsBienBanKiemTraDLT,
                                L("DSDLTBiLapBB"),
                                url: "App/QuanLyBienBanKiemTra",
                                icon: "flaticon-folder-1",
                                permissionDependency: new SimplePermissionDependency(AppPermissions.Pages_Administration_Host_BienBanKiemTra)
                                )
                            )
                        )
