          "use client";
          import {
            Navbar,
            NavBody,
            MobileNav,
            NavbarButton,
            MobileNavHeader,
            MobileNavToggle,
            MobileNavMenu,
          } from "@/components/ui/resizable-navbar";
          import { ThemeToggle } from "@/components/ui/theme-toggle";
          import { useState } from "react";

          const CustomNavbarLogo = () => {
            return (
              <a
                href="#"
                className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200 text-lg font-bold">
                  Wuji
                </span>
                <span className="font-medium text-black dark:text-white">Health</span>
              </a>
            );
          };

          export function NavbarDemo() {
            const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

            return (
              <div className="fixed top-0 left-0 right-0 z-50 w-full">
                <Navbar className="top-0">
                  {/* Desktop Navigation */}
                  <NavBody>
                    <div className="flex w-full items-center justify-between">
                      {/* Left - Logo */}
                      <CustomNavbarLogo />
                      
                      {/* Center - Coming Soon Button */}
                      <div className="absolute left-1/2 -translate-x-1/2">
                        <NavbarButton variant="primary">Coming Soon</NavbarButton>
                      </div>
                      
                      {/* Right - Theme Toggle */}
                      <div className="flex items-center">
                        <ThemeToggle className="relative z-50" />
                      </div>
                    </div>
                  </NavBody>

                  {/* Mobile Navigation */}
                  <MobileNav>
                    <MobileNavHeader>
                      <CustomNavbarLogo />
                      <div className="flex items-center gap-2">
                        <ThemeToggle className="relative z-50" />
                        <MobileNavToggle
                          isOpen={isMobileMenuOpen}
                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                      </div>
                    </MobileNavHeader>

                    <MobileNavMenu
                      isOpen={isMobileMenuOpen}
                      onClose={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex w-full flex-col gap-4">
                        <NavbarButton
                          onClick={() => setIsMobileMenuOpen(false)}
                          variant="primary"
                          className="w-full"
                        >
                          Login
                        </NavbarButton>
                        <NavbarButton
                          onClick={() => setIsMobileMenuOpen(false)}
                          variant="primary"
                          className="w-full"
                        >
                          Book a call
                        </NavbarButton>
                      </div>
                    </MobileNavMenu>
                  </MobileNav>
                </Navbar>
              </div>
            );
          } 